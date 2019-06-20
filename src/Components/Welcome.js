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
        <Color cyanBright>{title}</Color>
      </Box>
    );
  }
}
module.exports = Welcome 