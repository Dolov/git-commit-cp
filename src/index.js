const React = require('react');
const { render, Color, Box } = require('ink');
const Welcome = require('import-jsx')("./Components/Welcome");
const Rules = require('import-jsx')("./Components/Rules")
const utils = require("./utils");
const config = require("./config");

const { title, rules } = config

const { 
  commit, 
  isValidCommit, 
} = utils

const [,,...otherProps] = process.argv



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isValidCommit: false,
      isValidCommitMessage: "",
      messageParams: {

      }
    };
    this.onSubmit = this.onSubmit.bind(this)
    this.onCommit = this.onCommit.bind(this)
  }

  componentDidMount() {
    isValidCommit(process.cwd(), (valid, message) => {
      this.setState({
        isValidCommit: valid,
        isValidCommitMessage: message || "",
      })
    })
  }

  onSubmit(name, value) {
    const { messageParams } = this.state
    this.setState({
      messageParams: {
        ...messageParams,
        [name]: value,
      }
    })
  }

  onCommit() {

  }

  // onSelect(item) {
  //   this.setState({
  //     commitType: item.value,
  //   })
  // }

  // onChange(name, value) {
  //   this.setState({
  //     [name]: value,
  //   }, () => {
  //     if (name === 'description') {
  //       const { commitType, changeScope, description } = this.state
  //       const message = `${commitType}(${changeScope}):${description}`
  //       commit(message, otherProps)
  //     }
  //   })
  // }

  render() {
    const { isValidCommit, isValidCommitMessage, messageParams } = this.state
    return (
      <Box flexDirection="column">
        <Welcome title={title} />
        <Box flexDirection="column" padding={1}><Color yellowBright>{isValidCommitMessage}</Color></Box>
        {isValidCommit&&(
          <Rules 
            data={rules} 
            onSubmit={this.onSubmit}
            messageParams={messageParams}
          />
        )}
      </Box>
    );
  }
}

render(<App/>);