const path = require('path')

const eslintCommand = filenames =>
  `next lint --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`

const prettierCommand = filenames =>
  `npx prettier --write ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [eslintCommand, prettierCommand]
}
