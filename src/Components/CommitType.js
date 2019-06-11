const React = require('react');
const { Color, Box } = require('ink');
const SelectInput = require('ink-select-input').default

const items = [{
  label: <Color greenBright>feat:        <Color whiteBright>A new feature（添加新功能）</Color></Color>,
  value: 'feat'
}, {
  label: <Color greenBright>fix:         <Color whiteBright>A bug fix（修复bug）</Color></Color>,
  value: 'fix'
}, {
  label: <Color greenBright>docs:        <Color whiteBright>Documentation only changes（修改文档）</Color></Color>,
  value: 'docs'
}, {
  label: <Color greenBright>style:       <Color whiteBright>Change that do not affect the meaning of the code（优化代码风格）</Color></Color>,
  value: 'style'
}, {
  label: <Color greenBright>refactor:    <Color whiteBright>A code change that neither fixes a bug or adds a feature（重构）</Color></Color>,
  value: 'refactor'
}, {
  label: <Color greenBright>pref:        <Color whiteBright>A code change that improves performance（性能优化）</Color></Color>,
  value: 'pref'
}, {
  label: <Color greenBright>chore:       <Color whiteBright>Changes to the build process or auxiliary tools and libraries such as documentation generation（对构建过程或辅助工具和库（如文档生成）的更改）</Color></Color>,
  value: 'chore'
}];
class CommitType extends React.Component {

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { onSelect } = this.props
    return (
      <Box flexDirection="column">
        <Box height={2}></Box>
        <Color yellowBright>? Select the type of change that you're committing<Color whiteBright>（请选择提交内容的类型）</Color>:</Color>
        <Box height={1}></Box>
        <SelectInput items={items} onSelect={onSelect}/>
      </Box>
    );
  }
}
module.exports = CommitType 