module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "module:metro-react-native-babel-preset",
      {
        useBuiltIns: 'usage',
        module: "commonjs",
        //debug: true
      }
    ]
  ];

  const plugins = [
  ];

  return { presets, plugins }
}
