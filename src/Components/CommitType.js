const React = require('react');
const { Color, Box } = require('ink');
const SelectInput = require('ink-select-input').default

const items = [{
  label: 'A new feature（添加新功能）',
  value: 'feat'
}, {
  label: 'A bug fix（修复bug）',
  value: 'fix'
}, {
  label: 'Documentation only changes（修改文档）',
  value: 'docs'
}, {
  label: 'Change that do not affect the meaning of the code（优化代码风格）',
  value: 'style'
}, {
  label: 'A code change that neither fixes a bug or adds a feature（重构）',
  value: 'refactor'
}, {
  label: 'A code change that improves performance（性能优化）',
  value: 'pref'
}, {
  label: 'Changes to the build process or auxiliary tools and libraries such as documentation generation（对构建过程或辅助工具和库（如文档生成）的更改）',
  value: 'chore'
}];


const titleEn = `Select the type of change that you're committing`
const titleCh = `（请选择提交内容的类型）`
class CommitType extends React.Component {

  constructor() {
    super();
    this.state = {

    };
  }

  itemComponent({label, value, isSelected}) {
    if (isSelected) {
      return (
        <Color yellowBright value={value}>
          <Box width={15}><Color>{value}:</Color></Box>
          <Color>{label}</Color>
        </Color>
      )
    }
    return (
      <Color greenBright value={value}>
        <Box width={15}><Color>{value}:</Color></Box>
        <Color whiteBright>{label}</Color>
      </Color>
    )
  }

  render() {
    const { onSelect, value } = this.props
    return (
      <Box flexDirection="column" paddingTop={1}>
        {value&&(<Color yellowBright>{titleEn} <Color greenBright>{value}</Color></Color>)}
        {!value&&(
          <Box flexDirection="column">
            <Color yellowBright>? {titleEn}<Color whiteBright>{titleCh}</Color>:</Color>
            <Box height={1} />
            <SelectInput 
              items={items} 
              onSelect={onSelect}
              itemComponent={this.itemComponent}
            />
          </Box>)}
      </Box>
    );
  }
}



module.exports = CommitType 