import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import alias from '@rollup/plugin-alias';
import path from 'path';
import { fileURLToPath } from 'url';
import svgr from '@svgr/rollup';
import typescript from 'rollup-plugin-typescript2';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default {
  input: './src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    alias({
      resolve: ['.jsx', '.js', '.ts', '.tsx'], //optional, by default this will just look for .js files or folders
      entries: [
        {
          find: '@/components',
          replacement: path.resolve(__dirname, 'src/components'),
        },
        {
          find: '@/styles',
          replacement: path.resolve(__dirname, 'src/styles'),
        },
        { find: '@/lib', replacement: path.resolve(__dirname, 'src/lib') },
      ],
    }),
    peerDepsExternal(),
    preserveDirectives(),
    commonjs({
      include: 'node_modules/**', // Ensure that commonjs modules in node_modules are handled
    }),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      preferBuiltins: true,
      dedupe: ['react', 'react-dom', 'react-is'],
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled', // Explicitly set babelHelpers option
    }),
    postcss({
      // Inline the CSS in JavaScript
      inject: true,
      // Minify CSS for production
      minimize: true,
      // Process CSS with PostCSS
      extensions: ['.css'],
    }),
    typescript(),
    svgr(), // load .svg files as React components
  ],
  external: ['react', 'react-dom'],
  onwarn: (warning, warn) => {
    // Suppress specific warning
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
    warn(warning);
  },
};
