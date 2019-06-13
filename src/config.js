
const required = "代码千万行，注释第一行。编码不规范，同事两行泪。"

module.exports = {
  title: "Welcome ClickPaas git Commitizen...",
  rules: [
    {
      type: 'CHECKBOX',
      name: 'commitType',
      description: {
        'en-US': `Select the type of change that you're committing`,
        'zh-CN': '请选择提交内容的类型',
      },
      required,
      options: [{
        title: 'A new feature（新功能）',
        value: 'feat'
      }, {
        title: 'A bug fix（修复问题）',
        value: 'fix'
      }, {
        title: 'Documentation only changes（文档修改）',
        value: 'docs'
      }, {
        title: 'Change that do not affect the meaning of the code（代码格式修改, 注意不是 css 修改）',
        value: 'style'
      }, {
        title: 'A code change that neither fixes a bug or adds a feature（代码重构）',
        value: 'refactor'
      }, {
        title: 'A code change that improves performance（性能优化）',
        value: 'pref'
      }, {
        title: 'Changes to the build process or auxiliary tools and libraries such as documentation generation（其他修改, 比如构建流程, 依赖管理）',
        value: 'chore'
      }]
    },
    {
      type: 'INPUT',
      name: 'changeScope',
      placeholder: "Enter here ...",
      description: {
        'en-US': 'What is the scope of this change, route, component, utils, build...',
        'zh-CN': '影响的范围, 比如: route, component, utils, build...',
      },
      required,
    },
    {
      type: 'INPUT',
      name: 'description',
      placeholder: "Enter here ...",
      description: {
        'en-US': 'Write a short, imperative tense description of the change',
        'zh-CN': '请简单描述一下作出的更改',
      },
      required,
    },
  ]
}