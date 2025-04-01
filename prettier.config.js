module.exports = {
  $schema: 'https://json.schemastore.org/prettierrc',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'none',
  singleQuote: true,
  semi: true,
  importOrder: [
    '^react$',
    '^react-native$',
    '<THIRD_PARTY_MODULES>',
    '^src/(.*)$',
    '^[./]'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  quoteProps: 'consistent',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'auto',
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  singleAttributePerLine: true
};
