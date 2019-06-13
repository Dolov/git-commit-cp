
const React = require("react")
const { Color } = require('ink');



class Required extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    const { required, message } = this.props
    if (!required) return null
    const requiredMess = typeof message === 'boolean' ? 'required': message
    return (
      <Color redBright>{requiredMess}</Color>
    )
  }
}

module.exports = Required