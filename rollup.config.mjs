import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import path from 'path';
import { fileURLToPath } from 'url';
import svgr from '@svgr/rollup';
import merge from 'deepmerge';
// import { createBasicConfig } from '@open-wc/building-rollup';
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const baseConfig = createBasicConfig();

// export default merge(baseConfig, {
export default {
  input: './out-tsc/src/index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      preferBuiltins: true,
      dedupe: ['react', 'react-dom', 'react-is'],
  }),
      babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
    }),
    postcss({
      extensions: ['.css'],
    }),
    typescript(),
    alias({
      resolve: ['.jsx', '.js', '.ts', '.tsx'], //optional, by default this will just look for .js files or folders
      entries: [
        { find: '@/components', replacement: path.resolve(__dirname, 'src/components') },
        { find: '@/styles', replacement: path.resolve(__dirname, 'src/styles') },
        { find: '@/lib', replacement: path.resolve(__dirname, 'src/lib') },
      ]
    }),
    svgr(), // load .svg files as React components
  ],
  external: ['react', 'react-dom'],
};