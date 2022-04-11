const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join } = require('path');
const preset = require('../../tailwind.config');

module.exports = {
  presets: [preset],
  content: [
    join(__dirname, 'src/**/*.{js,ts,tsx,jsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
