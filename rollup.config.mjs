import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import alias from '@rollup/plugin-alias';
import path from 'path';
import image from '@rollup/plugin-image';

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
    alias({
      entries: [{ find: '@/', replacement: path.resolve('../../') }]
    }),
    nodeResolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    typescript(),
    image(),
    terser()
  ]
};
