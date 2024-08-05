import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    nodeResolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    typescript(),
    terser()
  ]
};
