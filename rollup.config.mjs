import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import path from 'path';
import { fileURLToPath } from 'url';
import svgr from '@svgr/rollup';
import typescript from 'rollup-plugin-typescript2';
import preserveDirectives from 'rollup-plugin-preserve-directives';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default {
  input: './src/index.ts',
  output: [
    {
      dir: 'dist', // Output directory
      format: 'esm',
      sourcemap: true,
      preserveModules: true, // Preserve the directory structure of your source
      entryFileNames: '[name].js', // Each module will have its own file
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
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
    commonjs({
      include: 'node_modules/**', // Ensure that commonjs modules in node_modules are handled
      ignoreGlobal: true,
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
    typescript({ verbosity: 1, clean: true }),
    svgr(), // load .svg files as React components
    preserveDirectives(),
  ],
  external: ['react', 'react-dom'],
  onwarn(warning, warn) {
    // Ignore specific warnings
    if (warning.code === 'UNRESOLVED_IMPORT') return;
    if (warning.code === 'THIS_IS_UNDEFINED') return;
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
    if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;

    // Log all other warnings
    warn(warning);
  },
};
