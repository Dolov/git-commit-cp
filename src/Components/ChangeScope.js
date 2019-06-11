const React = require('react');
const { Color, Box } = require('ink');
const TextInput = require('ink-text-input').default

class ChangeScope extends React.Component {

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { onChange, value } = this.props
    return (
      <Box flexDirection="column">
        <Box height={2}></Box>
        <Color yellowBright>? What is the scope of this change<Color whiteBright>（请填写改动了那些组件或者文件名称）</Color>:</Color>
        <Box height={1}></Box>
        <TextInput value={value} onChange={onChange} />
      </Box>
    );
  }
}
module.exports = ChangeScope 