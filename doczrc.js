import pkg from './package.json';

export default {
  title: 'Use Simple Undo',
  description: pkg.description,
  base: `/${pkg.name}/`,
  version: pkg.version,
  propsParser: false,
  hashRouter: true,
  themeConfig: {
    logo: {
      src: 'https://svgshare.com/i/9Ff.svg',
      width: 232,
    },
    colors: {
      primary: '#000000',
    },
  },
};
