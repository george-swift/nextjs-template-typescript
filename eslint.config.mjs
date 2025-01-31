import eslintConfigTrumpet from '@trumpet/eslint-config-next'

export default [
  ...eslintConfigTrumpet,
  {
    ignores: ['.lintstagedrc.js', 'postcss.config.mjs']
  }
]
