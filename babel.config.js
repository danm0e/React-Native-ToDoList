module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      'babel-preset-expo',
      'module:metro-react-native-babel-preset'
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json'
          ],
          alias: {
            '@containers': './app/containers',
            '@components': './app/components',
            '@views': './app/views',
            '@assets': './app/assets',
            '@services': './app/services'
          }
        }
      ]
    ]
  }
}
