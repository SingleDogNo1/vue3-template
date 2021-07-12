'use strict'
module.exports = {
  types: [
    {
      value: 'feat',
      name: '✨  feat:              添加新功能',
    },
    {
      value: 'fix',
      name: '🐞  fix:               修复bug',
    },
    {
      value: 'style',
      name: '💅  style:             格式代码变动, 不影响代码功能的更改',
    },
    {
      value: 'pref',
      name: '🛠   performance:       优化/性能提升',
    },
    {
      value: 'docs',
      name: '📚  docs:              修改文档',
    },
    {
      value: 'test',
      name: '🏁  test:              新增或修改测试用例',
    },
    {
      value: 'refactor',
      name: '🛠   refactor:          重构，既不新增功能，也不修改bug的代码变动',
    },
    {
      value: 'chore',
      name: '🗯   chore:             更改脚手架配置相关文件',
    },
    {
      value: 'revert',
      name: '⏪  revert:            版本回退',
    },
    {
      value: 'ui',
      name: '✏️   ui:                只更新css样式，不涉及任何逻辑变动',
    },
  ],
  scopes: [],
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
}
