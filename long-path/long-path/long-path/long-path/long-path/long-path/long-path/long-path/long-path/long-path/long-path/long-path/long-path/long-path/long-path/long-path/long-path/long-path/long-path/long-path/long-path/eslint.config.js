import eslintImport from 'eslint-plugin-import';

const config = [
  {
    plugins: {
      import: eslintImport,
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];

export default config;
