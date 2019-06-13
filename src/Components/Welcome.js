const React = require('react');
const { Color, Box } = require('ink');

class Welcome extends React.Component {

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <Box flexDirection="column">
        <Color redBright> *</Color>
        <Color greenBright> **</Color>
        <Color yellowBright> ***</Color>
        <Color blueBright> ****</Color>
        <Color magentaBright> *****</Color>
        <Color cyanBright> ****** Welcome ClickPaaS git commit !!! </Color>
      </Box>
    );
  }
}
module.exports = Welcome 