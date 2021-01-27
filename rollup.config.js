const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const { terser } = require('rollup-plugin-terser');
module.exports = {
  input: "./index.js",
  output: [{
    name: 'index.js',
    file: 'dist/index.esm.js',
    format: 'es',
    minify: true,
  }, {
    name: 'index.js',
    file: 'dist/index.umd.js',
    format: 'umd',
    minify: true,
  }, {
    name: 'index.js',
    file: 'dist/index.cjs.js',
    format: 'cjs',
    minify: true,
  }, {
    name: 'sereinUtils',
    file: 'dist/index.js',
    format: 'iife',
    minify: true,
  }],
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      extensions: ['js', 'jsx']
    }),
    terser()
  ]
}

