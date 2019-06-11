const config = require("./config");
const React = require('react');
const { render, Color, Text, Box } = require('ink');
const Header = require('import-jsx')("./Components/Header");


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <Box flexDirection="column">
        <Header />
      </Box>
    );
  }
}

render(<App/>);