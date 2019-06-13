const React = require('react');
const { render, Color, Box } = require('ink');
const Welcome = require('import-jsx')("./Components/Welcome");
const Rules = require('import-jsx')("./Components/Rules")
const utils = require("./utils");

const { 
  commit, 
  getConfig,
  isValidCommit, 
} = utils

const { title, rules } = getConfig()

const [,,...otherProcessArgv] = process.argv

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
    }, () => {
      this.onCommit(name)
    })
  }

  onCommit(currentName) {
    const endName = rules[rules.length - 1].name
    if (endName === currentName) {
      const { messageParams } = this.state
      const message = []
      Object.keys(messageParams).forEach(name => {
        const { commitFix } = rules.find(rule => rule.name === name) || {}
        const value = messageParams[name] || ''
        if (typeof commitFix === 'string' && commitFix.includes('${message}')) {
          const mess = commitFix.replace(/\${message}/, value)
          message.push(mess)
        } else {
          message.push(value)
        }
      })
      commit(message.join(""), otherProcessArgv)
    }
  }

  render() {
    const { isValidCommit, isValidCommitMessage, messageParams } = this.state
    return (
      <Box flexDirection="column">
        <Welcome title={title} />
        <Box flexDirection="column"><Color yellowBright>{isValidCommitMessage}</Color></Box>
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