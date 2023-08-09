module.exports = {
  plugins: ['react-hooks'],
  extends: ['next/core-web-vitals'],
  rules: {
    'react-hooks/rules-of-hooks': 'off',
    '@next/next/no-img-element': 'off',
    '@next/next/no-server-import-in-page': 'off',
  },
};
