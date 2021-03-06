const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join } = require('path');
const preset = require('../../tailwind.config');

module.exports = {
  presets: [preset],
  content: [
    join(__dirname, 'pages/**/*.{js,ts,tsx,jsx}'),
    join(__dirname, 'components/**/*.{js,ts,tsx,jsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
