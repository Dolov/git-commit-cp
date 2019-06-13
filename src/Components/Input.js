const React = require('react');
const { Color, Box, Text } = require('ink');
const TextInput = require('ink-text-input').default
const { getDesc } = require("../utils")


class Input extends React.Component {

  constructor() {
    super();
    this.state = {
      value: "",
      required: false,
    };
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(value) {
    const required = value ? false: true
    this.setState({
      value,
      required,
    })
  }

  onSubmit(value) {
    const { name, onSubmit, required } = this.props
    if (required && !value) {
      this.setState({
        required: true,
      })
    } else {
      onSubmit(name, value)
    }
  }

  render() {
    const { value, required } = this.state
    const { submited, description, placeholder, required: requiredProps } = this.props
    const { desc_us, desc_cn } = getDesc(description)
    const requiredMess = typeof requiredProps === 'boolean' ? 'required': requiredProps
    return (
      <Box flexDirection="column" paddingTop={1}>
        {!submited&&(
          <Box flexDirection="column">
            <Box flexDirection="column">
              <Color yellowBright>{desc_us}</Color>
              <Color whiteBright>{desc_cn}</Color>
              {required&&(<Color redBright>{requiredMess}</Color>)}
            </Box>
            <Box height={1} />
            <TextInput 
              showCursor
              value={value} 
              onChange={this.onChange} 
              onSubmit={this.onSubmit} 
              placeholder={placeholder}
            />
          </Box>)}
        {submited&&(
          <Color yellowBright>{desc_us} <Color greenBright>{value}</Color></Color>
        )}
      </Box>
    );
  }
}


Input.defaultProps = {
  required: false,
  placeholder: "Enter here ...",
}

module.exports = Input 