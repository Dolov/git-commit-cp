const React = require('react');
const { Color, Box } = require('ink');

class Header extends React.Component {

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <Box flexDirection="column">
        <Color>***************************************************</Color>
        <Box>
          <Box width={50}>
            <Color whiteBright>*</Color>
            <Color redBright> *</Color>
          </Box>
          <Color whiteBright>*</Color>
        </Box>
        <Box>
          <Box width={50}>
            <Color whiteBright>*</Color>
            <Color greenBright> **</Color>
          </Box>
          <Color whiteBright>*</Color>
        </Box>
        <Box>
          <Box width={50}>
            <Color whiteBright>*</Color>
            <Color yellowBright> ***</Color>
          </Box>
          <Color whiteBright>*</Color>
        </Box>
        <Box>
          <Box width={50}>
            <Color whiteBright>*</Color>
            <Color blueBright> ****</Color>
          </Box>
          <Color whiteBright>*</Color>
        </Box>
        <Box>
          <Box width={50}>
            <Color whiteBright>*</Color>
            <Color magentaBright> *****</Color>
          </Box>
          <Color whiteBright>*</Color>
        </Box>
        <Box>
          <Box width={50}>
            <Color whiteBright>*</Color>
            <Color cyanBright> ****** Welcome ClickPaas git commit !!! </Color>
          </Box>
          <Color whiteBright>*</Color>
        </Box>
        <Color>***************************************************</Color>
      </Box>
    );
  }
}
module.exports = Header 