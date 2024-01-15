module.exports = {
  '**/*.ts?(x)': () => 'npm run build-types',
  '*.json': ['prettier --write'],
};
