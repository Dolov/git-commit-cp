const React = require('react');
const { Color, Box } = require('ink');
const TextInput = require('ink-text-input').default


class Input extends React.Component {

  constructor() {
    super();
    this.state = {
      value: "",
    };
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(value) {
    this.setState({
      value,
    })
  }

  onSubmit(value) {
    const { name, onChange } = this.props
    onChange(name, value || true)
  }

  render() {
    const { value } = this.state
    const { value: inputValue, title } = this.props
    const { en, ch } = title
    return (
      <Box flexDirection="column" paddingTop={1}>
        {!inputValue&&(
          <Box flexDirection="column">
            <Color yellowBright>? {en}<Color whiteBright>{ch}</Color>:</Color>
            <Box height={1} />
            <TextInput 
              showCursor
              highlightPastedText
              value={value} 
              onChange={this.onChange} 
              onSubmit={this.onSubmit} 
              placeholder="Enter here ..."
            />
          </Box>)}
        {inputValue&&(
          <Color yellowBright>{en} <Color greenBright>{inputValue}</Color></Color>
        )}
      </Box>
    );
  }
}
module.exports = Input 