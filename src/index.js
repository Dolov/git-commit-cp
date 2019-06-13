const React = require('react');
const { render, Color, Box } = require('ink');
const Welcome = require('import-jsx')("./Components/Welcome");
const CommitType = require('import-jsx')("./Components/CommitType");
const Input = require('import-jsx')("./Components/Input.js");
const utils = require("./utils");

const { 
  commit, 
  isValidCommit, 
  title_changeScope,
  title_description, 
} = utils

const [,,...otherProps] = process.argv



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      commitType: null,
      changeScope: "",
      description: "",
      isValidCommit: false,
      isValidCommitMessage: "",
    };
    this.onInputChange = this.onInputChange.bind(this)
    this.onCommitTypeSelect = this.onCommitTypeSelect.bind(this)
  }

  componentDidMount() {
    isValidCommit(process.cwd(), (valid, message) => {
      this.setState({
        isValidCommit: valid,
        isValidCommitMessage: message,
      })
    })
  }

  onCommitTypeSelect(item) {
    this.setState({
      commitType: item.value,
    })
  }

  onInputChange(name, value) {
    this.setState({
      [name]: value,
    }, () => {
      if (name === 'description') {
        const { commitType, changeScope, description } = this.state
        const message = `${commitType}(${changeScope}):${description}`
        commit(message, otherProps)
      }
    })
  }

  render() {
    const { changeScope, commitType, description, isValidCommit, isValidCommitMessage } = this.state
    return (
      <Box flexDirection="column">
        <Welcome />
        <Box flexDirection="column" padding={1}><Color yellowBright>{isValidCommitMessage}</Color></Box>
        {isValidCommit&&(
          <Box flexDirection="column">
            <CommitType value={commitType} onSelect={this.onCommitTypeSelect} />
            {commitType&&(
              <Input 
                name="changeScope"
                value={changeScope} 
                onChange={this.onInputChange} 
                title={title_changeScope}
              />)}
            {changeScope&&(
              <Input 
                name="description"
                value={description} 
                onChange={this.onInputChange} 
                title={title_description}
              />)}
          </Box>)}
      </Box>
    );
  }
}

render(<App/>);