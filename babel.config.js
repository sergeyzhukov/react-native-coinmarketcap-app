module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@constants': './src/constants',
          '@actions': './src/actions',
          '@reducers': './src/reducers',
          '@selectors': './src/selectors',
        },
      },
    ],
  ],
}
