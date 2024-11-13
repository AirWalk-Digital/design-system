import path from 'path';
import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import url from '@rollup/plugin-url';

// Paths for input and output directories
const inputPath = 'src/index.ts'; // Entry point for the library
const outputDir = 'dist';

export default defineConfig([
  {
    input: inputPath,
    output: [
      {
        file: path.join(outputDir, 'index.cjs.js'),
        format: 'cjs', // CommonJS format
        sourcemap: true,
      },
      {
        file: path.join(outputDir, 'index.esm.js'),
        format: 'esm', // ES Module format
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }), // Resolve imports
      commonjs(), // Convert CommonJS modules to ES6
      postcss({
        extract: true,
        minimize: true,
      }),
      json(), // Handle JSON imports
      url({
        include: ['**/*.svg'], // Handle SVG imports
        limit: 0, // Always inline the files
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        rootDir: 'src',
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
        babelHelpers: 'bundled', // Explicitly set babelHelpers option
      }),
    ],
    external: ['react', 'react-dom'],
    onwarn: (warning, warn) => {
      // Suppress specific warning
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
      warn(warning);
    },
  },
]);
