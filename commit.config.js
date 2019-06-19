
const required = "代码千万行，注释第一行。编码不规范，同事两行泪。"

// type: CHECKBOX | RADIO | INPUT

module.exports = {
  title: "Welcome ClickPaas git Commitizen...",
  rules: [
    {
      type: 'RADIO',
      name: 'commitType',
      commitFix: "",
      description: {
        'en-US': `Select the type of change that you're committing`,
        'zh-CN': '请选择提交内容的类型',
      },
      required,
      options: [
        {
          title: 'when add a new feature',
          value: '✨'
        }, {
          title: 'when fixing a bug',
          value: '🐛'
        }, {
          title: 'when improving performance',
          value: '🐎'
        }, {
          title: 'when improving the format/structure of the code',
          value: '🎨'
        }, {
          title: 'when plugging memory leaks',
          value: '🚱'
        }, {
          title: 'when writing docs',
          value: '📝'
        }, {
          title: 'when fixing something on Linux',
          value: '🐧'
        }, {
          title: 'when fixing something on macOS',
          value: '🍎'
        }, {
          title: 'when fixing something on Windows',
          value: '🏁'
        }, {
          title: 'when removing code or files',
          value: '🔥'
        }, {
          title: 'when fixing the CI build',
          value: '💚'
        }, {
          title: 'when adding tests',
          value: '✅'
        }, {
          title: 'when dealing with security',
          value: '🔒'
        }, {
          title: 'when upgrading dependencies',
          value: '⬆️'
        }, {
          title: 'when downgrading dependencies',
          value: '⬇️'
        }, {
          title: 'when removing linter warnings',
          value: '👕'
        }]
    },
    {
      type: 'INPUT',
      name: 'description',
      commitFix: ":${message}",
      placeholder: "Enter here ...",
      description: {
        'en-US': 'Write a short, imperative tense description of the change',
        'zh-CN': '请简单描述一下作出的更改',
      },
      required,
    },
  ]
}