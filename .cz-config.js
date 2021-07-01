'use strict'
module.exports = {
  types: [
    {
      value: 'feat',
      name: '✨  feat:         添加新功能',
    },
    {
      value: 'fix',
      name: '🐞  fix:          修复bug',
    },
    {
      value: 'style',
      name: '💅  style:        代码格式变动, 不影响代码功能的更改(修改空格/格式化代码等操作)',
    },
    {
      value: 'docs',
      name: '📚  docs:         修改文档',
    },
    {
      value: 'test',
      name: '🏁  test:         新增或修改测试用例',
    },
    {
      value: 'refactor',
      name: '🛠   refactor:     既不是新增功能，也不是修改bug的代码变动',
    },

    {
      value: 'chore',
      name: '🗯   chore:        更改环境配置相关文件',
    },
    {
      value: 'revert',
      name: '⏪  revert:       版本回退',
    },
    {
      value: 'ui',
      name: '✏️   ui:           只更新css样式，不涉及任何业务功能的修改',
    },
  ],
  scopes: [],
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
}