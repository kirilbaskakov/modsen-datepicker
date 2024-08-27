import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: false
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: false
    }
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      '@/assets': '../../../src/assets',
      delimiters: ['', '']
    }),
    nodeResolve({
      moduleDirectories: ['node_modules']
    }),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    typescript(),
    image(),
    terser()
  ],
  external: ['react']
};
