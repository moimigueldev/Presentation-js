import minify from 'rollup-plugin-babel-minify';
import babel from 'rollup-plugin-babel';
module.exports = {
  input: 'src/index.js',
  output: {
    file: 'build/bundle.js',
    format: 'iife',
    name: 'presentation',
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      minify({
        comments: false,
      }),
    ],
  },
};
