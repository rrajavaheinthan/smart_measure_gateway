module.exports = {
  presets: [
    '@babel/typescript',
    '@babel/react',
    ['@babel/env', {
      loose: true,
      targets: { node: 'current' }
    }],
  ],
  plugins: [
    ["@babel/transform-runtime"]
]
};