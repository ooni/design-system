import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { dts } from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import { visualizer } from 'rollup-plugin-visualizer'
import filesize from 'rollup-plugin-filesize'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import copy from 'rollup-plugin-copy'
import svgr from '@svgr/rollup'
import url from '@rollup/plugin-url'
import packageJson from './package.json' assert { type: 'json' }
import del from 'rollup-plugin-delete'

const extensions = ['.ts', '.tsx']
const mainBundle = {
  input: './src/index.ts',
  output: [
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
      interop: 'auto',
    },
  ],
  plugins: [
    del({
      targets: 'dist/*',
    }),
    peerDepsExternal(),
    url(),
    svgr(),
    json(),
    commonjs(),
    // babel({
    //   extensions,
    //   babelHelpers: 'bundled',
    //   exclude: 'node_modules/**',
    // }),
    typescript({
      tsconfig: './tsconfig.json',
      exclude: ['**/__test__/*', '**/__mocks__/*', '**/stories/*'],
    }),
    copy({
      targets: [
        {
          src: './src/fonts',
          dest: './dist',
        },
      ],
    }),
    resolve(),
    terser({ compress: { evaluate: false } }),
    // filesize(),
    visualizer(),
  ],
}

const iconBundle = {
  input: './src/components/icons/index.ts',
  output: [
    {
      file: 'dist/esm/ooni-components-icons.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    url(),
    svgr(),
    json(),
    resolve(),
    commonjs({ transformMixedEsModules: true }),
    typescript({
      tsconfig: './icons/tsconfig.json',
      exclude: ['**/__test__/*', '**/__mocks__/*', '**/stories/*'],
    }),
    terser(),
    // filesize(),
    visualizer(),
  ],
}

const declarationGenerator = {
  input: 'dist/esm/types/index.d.ts',
  output: [{ file: 'dist/esm/index.d.ts', format: 'esm' }],
  plugins: [
    dts(),
    del({
      targets: './dist/esm/types',
      hook: 'buildEnd',
    }),
  ],
}

const iconDeclarationGenerator = {
  input: 'dist/esm/icons/types/index.d.ts',
  output: [{ file: 'dist/esm/ooni-components-icons.d.ts', format: 'esm' }],
  plugins: [
    dts(),
    del({
      targets: './dist/esm/icons',
      hook: 'buildEnd',
    }),
  ],
}

export default [
  mainBundle,
  declarationGenerator,
  iconBundle,
  iconDeclarationGenerator,
]
