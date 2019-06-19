const React = require('react');
const { Color, Box } = require('ink');
const RadioSelect = require('ink-select-input').default
const MultiSelect = require('ink-multi-select').default
const Required = require('import-jsx')("./Required")
const { getDesc } = require("../utils")

class Select extends React.Component {

  constructor() {
    super();
    this.state = {
      value: "",
      required: false,
    };
    this.onSubmit = this.onSubmit.bind(this)
    this.onSelect = this.onSelect.bind(this)
  }

  itemComponent({title, value, isSelected}) {
    if (isSelected) {
      return (
        <Color yellowBright value={value}>
          <Box width={15}><Color>{value}</Color></Box>
          <Color>{title}</Color>
        </Color>
      )
    }
    return (
      <Color greenBright value={value}>
        <Box width={15}><Color>{value}</Color></Box>
        <Color whiteBright>{title}</Color>
      </Color>
    )
  }

  onSelect(item) {
    const { name, onSubmit, multi } = this.props
    if (!multi) {
      this.setState({
        value: item.value
      })
      onSubmit(name, item.value)
    } else {
      this.setState({
        required: false,
      })
    }
  }

  onSubmit(item) {
    const { name, onSubmit, multi, required: requiredProps } = this.props
    if (multi) {
      const value = item.map(i => i.value).join("、")
      const required = !!!item.length && requiredProps
      this.setState({
        value,
        required,
      })
      !required && onSubmit(name, value)
    }
  }

  render() {
    const { value, required } = this.state
    const { submited, options, description, multi, required: requiredProps } = this.props
    const { desc_us, desc_cn } = getDesc(description)
    const Select = multi ? MultiSelect: RadioSelect
    return (
      <Box flexDirection="column" paddingBottom={1}>
        {!submited&&(
          <Box flexDirection="column">
            <Box flexDirection="column">
              <Color yellowBright>{desc_us}</Color>
              <Color whiteBright>{desc_cn}</Color>
              <Required required={required} message={requiredProps} />
            </Box>
            <Box height={1} />
            <Select 
              items={options} 
              onSelect={this.onSelect}
              onSubmit={this.onSubmit}
              itemComponent={this.itemComponent}
            />
          </Box>)}
          {submited&&(<Color yellowBright>{desc_us} <Color greenBright>{value}</Color></Color>)}
      </Box>
    );
  }
}



module.exports = Select 