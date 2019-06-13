const React = require('react');
const { Color, Box } = require('ink');

class Welcome extends React.Component {

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { title } = this.props
    return (
      <Box flexDirection="column" padding={1}>
        <Color redBright> *</Color>
        <Color greenBright> **</Color>
        <Color yellowBright> ***</Color>
        <Color blueBright> ****</Color>
        <Color magentaBright> *****</Color>
        <Color cyanBright> ****** {title}</Color>
      </Box>
    );
  }
}
module.exports = Welcome 