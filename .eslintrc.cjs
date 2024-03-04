module.exports = {
  extends: ['@rocketseat/eslint-config/react'],
  plugins: ['react-refresh'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
  },
}