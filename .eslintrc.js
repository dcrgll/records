// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    // `expo` must come after `standard` or its globals configuration will be overridden
    'expo',
    // `jsx-runtime` must come after `expo` or it will be overridden
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  plugins: ['reactotron', 'prettier', 'react-hooks', '@tanstack/query'],
  rules: {
    'prettier/prettier': 'error',
    // typescript-eslint
    '@typescript-eslint/array-type': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-require-imports': 0,
    '@typescript-eslint/no-empty-object-type': 0,
    // eslint
    'no-use-before-define': 0,
    'no-restricted-imports': [
      'error',
      {
        paths: [
          // Prefer named exports from 'react' instead of importing `React`
          {
            name: 'react',
            importNames: ['default'],
            message: "Import named exports from 'react' instead."
          }
        ]
      }
    ],
    // react
    'react/prop-types': 0,
    // react-native
    'react-native/no-raw-text': 0,
    // reactotron
    'reactotron/no-tron-in-production': 'error',
    // eslint-config-standard overrides
    'comma-dangle': 0,
    'no-global-assign': 0,
    'quotes': 0,
    'space-before-function-paren': 0,
    'react-native/no-color-literals': 0
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json'
      }
    }
  }
};
