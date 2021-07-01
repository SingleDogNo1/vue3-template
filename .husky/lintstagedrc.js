module.exports = {
  '*.{js,jsx,ts,tsx,vue}': ['npm run lint'],
  'package.json': ['prettier --write'],
  '*.{css,scss,less,styl,html}': ['stylelint --fix', 'prettier --write'],
  '*.md': ['prettier --write'],
}
