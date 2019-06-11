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
        <Color redBright>/**</Color>
        <Color greenBright> *</Color>
        <Color yellowBright>  *</Color>
        <Color blueBright>   *</Color>
        <Color magentaBright>    *</Color>
        <Color cyanBright>     *</Color>
        <Color greenBright>      Welcome ClickPaas git commit !!! </Color>
        <Color redBright>     *</Color>
        <Color greenBright>    *</Color>
        <Color yellowBright>   *</Color>
        <Color blueBright>  *</Color>
        <Color magentaBright> *</Color>
        <Color cyanBright>**/</Color>
      </Box>
    );
  }
}
module.exports = Header 