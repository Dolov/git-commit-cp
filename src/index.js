const config = require("./config");
const React = require('react');
const { render, Color, Text, Box } = require('ink');
const Header = require('import-jsx')("./Components/Header");
const CommitType = require('import-jsx')("./Components/CommitType");
const ChangeScope = require('import-jsx')("./Components/ChangeScope.js");




class App extends React.Component {

  constructor() {
    super();
    this.state = {
      commitType: null,
      changeScope: "",
    };
    this.onScopeChange = this.onScopeChange.bind(this)
    this.onCommitTypeSelect = this.onCommitTypeSelect.bind(this)
  }

  onCommitTypeSelect(item) {
    this.setState({
      commitType: item.value,
    })
  }

  onScopeChange(value) {
    this.setState({
      changeScope: value,
    })
  }

  render() {
    const { changeScope, commitType } = this.state
    return (
      <Box flexDirection="column">
        <Header />
        {!commitType&&(<CommitType onSelect={this.onCommitTypeSelect} />)}
        {!changeScope&&(<ChangeScope value={changeScope} onChange={this.onScopeChange} />)}
      </Box>
    );
  }
}

render(<App/>);