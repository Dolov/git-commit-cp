const config = require("./config");
const React = require('react');
const { render, Color, Text, Box } = require('ink');
const Header = require('import-jsx')("./Components/Header");
const CommitType = require('import-jsx')("./Components/CommitType");
const Input = require('import-jsx')("./Components/Input.js");
// const Spinner = require('ink-spinner').default;
const utils = require("./utils");

const { isClean } = utils


const title_changeScope = {
  en: 'What is the scope of this change',
  ch: '（请填写改动了那些组件或者文件名称）'
}

const title_description = {
  en: 'Write a short, imperative tense description of the change',
  ch: '（请简单描述一下作出的更改）'
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      commitType: null,
      changeScope: "",
      description: "",
      isStageClean: null,
    };
    this.onInputChange = this.onInputChange.bind(this)
    this.onCommitTypeSelect = this.onCommitTypeSelect.bind(this)
  }

  componentDidMount() {
    isClean(process.cwd(), (error, isStageClean) => {
      if (error) return 
      this.setState({
        isStageClean: isStageClean,
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
    })
  }

  render() {
    const { changeScope, commitType, description, isStageClean } = this.state

    return (
      <Box flexDirection="column">
        <Header />
        {(isStageClean===true)&&(
          <Box flexDirection="column" padding={1}><Color yellowBright>No files added to staging! Did you forget to run git add ?</Color></Box>
        )}
        {!isStageClean&&(
          <Box flexDirection="column">
            <CommitType value={commitType} onSelect={this.onCommitTypeSelect} />
            {commitType&&(
              <Input 
                name="changeScope"
                value={changeScope} 
                onChange={this.onInputChange} 
                title={title_changeScope}
              />
            )}
            {changeScope&&(
              <Input 
                name="description"
                value={description} 
                onChange={this.onInputChange} 
                title={title_description}
              />
            )}
          </Box>)}
      </Box>
    );
  }
}

render(<App/>);