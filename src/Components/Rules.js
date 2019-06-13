const React = require('react');
const { Color, Box } = require('ink');
const Select = require('import-jsx')("./Select");
const Input = require('import-jsx')("./Input.js");


class Rules extends React.PureComponent {

  render() {
    const { data, onSubmit, messageParams } = this.props
    return (
      <Box flexDirection="column">
        {data.map((rule, index) => {
          const { type, name } = rule
          const lastRule = data[index - 1]
          let rendering = true
          if (lastRule) {
            const { name } = lastRule
            rendering = `${name}` in messageParams
          }

          if (!rendering) return null
          const submited = `${name}` in messageParams
          if (type === 'RADIO') {
            return (
              <Select 
                key={name}
                submited={submited}
                onSubmit={onSubmit}
                {...rule}
              />
            )
          }
          if (type === 'CHECKBOX') {
            return (
              <Select 
                multi
                key={name}
                submited={submited}
                onSubmit={onSubmit}
                {...rule}
              />
            )
          }
          if (type === 'INPUT') {
            return (
              <Input 
                key={name}
                submited={submited}
                onSubmit={onSubmit}
                {...rule}
              />
            )
          } else {
            return (
              <Color key={index} red>unknow type {type}</Color>
            )
          }
        })}
      </Box>
    )
  }
}


module.exports = Rules