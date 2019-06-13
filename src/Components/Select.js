const React = require('react');
const { Color, Box } = require('ink');
const RadioSelect = require('ink-select-input').default
const MultiSelect = require('ink-multi-select').default
const { getDesc } = require("../utils")


class Select extends React.Component {

  constructor() {
    super();
    this.state = {
      value: "",
    };
    this.onSelect = this.onSelect.bind(this)
  }

  itemComponent({title, value, isSelected}) {
    if (isSelected) {
      return (
        <Color yellowBright value={value}>
          <Box width={20}><Color>{value}:</Color></Box>
          <Color>{title}</Color>
        </Color>
      )
    }
    return (
      <Color greenBright value={value}>
        <Box width={20}><Color>{value}:</Color></Box>
        <Color whiteBright>{title}</Color>
      </Color>
    )
  }

  onSelect(item) {
    const { name, onSubmit } = this.props
    this.setState({
      value: item.value
    })
    onSubmit(name, item.value)
  }

  onChange(item) {
    console.log(item, 'item')
  }

  render() {
    const { value } = this.state
    const { submited, options, description, multi } = this.props
    const { desc_us, desc_cn } = getDesc(description)
    const Select = multi ? MultiSelect: RadioSelect
    return (
      <Box flexDirection="column" paddingTop={1}>
        {!submited&&(
          <Box flexDirection="column">
            <Box flexDirection="column">
              <Color yellowBright>{desc_us}</Color>
              <Color whiteBright>{desc_cn}</Color>
            </Box>
            <Box height={1} />
            <Select 
              items={options} 
              onChange={this.onChange}
              onSelect={this.onSelect}
              itemComponent={this.itemComponent}
            />
          </Box>)}
          {submited&&(<Color yellowBright>{desc_us} <Color greenBright>{value}</Color></Color>)}
      </Box>
    );
  }
}



module.exports = Select 