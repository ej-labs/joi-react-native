module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
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
