import pkg from './package.json';

export default {
  title: 'Use Simple Undo',
  description: pkg.description,
  base: `/${pkg.name}/`,
  version: pkg.version,
  propsParser: false,
  hashRouter: true,
  typescript: true,
  themeConfig: {
    logo: {
      src: 'https://bit.ly/2taDitV',
      width: 232,
    },
    colors: {
      primary: '#000000',
    },
  },
};
