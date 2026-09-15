import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

export default [
  {
    ignores: ['.next/**', 'node_modules/**', '.claude/**', 'coverage/**'],
  },
  ...nextCoreWebVitals,
  {
    rules: {
      // Flags the common fetch-in-effect pattern as an error; downgraded.
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
];
