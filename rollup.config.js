import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

const format = process.env.FORMAT || 'cjs';

export default {
  input: 'src/index.js',
  output: {
    file: `dist/bundle.${format}.js`,
    format: format
  },
  plugins: [
    commonjs(),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
