import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import { visualizer } from 'rollup-plugin-visualizer'
import filesize from 'rollup-plugin-filesize'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import copy from 'rollup-plugin-copy'
import svgr from '@svgr/rollup'
import url from '@rollup/plugin-url'
const packageJson = require('./package.json')

function rollupPlugins() {
  return [
    url(),
    svgr(),
    json(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
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
    terser(),
    filesize(),
    visualizer(),
  ]
}

const mainBundle = {
  input: './src/index.ts',
  output: [
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: rollupPlugins(),
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
    url(),
    svgr(),
    json(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './icons/tsconfig.json',
      exclude: ['**/__test__/*', '**/__mocks__/*', '**/stories/*'],
    }),
    terser(),
    filesize(),
    visualizer(),
  ]
}

const declarationGenerator =   {
  input: 'dist/esm/src/types/index.d.ts',
  output: [{ file: './index.d.ts', format: 'esm' }],
  plugins: [dts()],
};

const iconDeclarationGenerator = {
  input: 'dist/esm/src/types/icons/index.d.ts',
  output: [{ file: 'icons/index.d.ts', format: 'esm' }],
  plugins: [dts()],
};

export default [
  mainBundle,
  iconBundle,
  declarationGenerator,
  iconDeclarationGenerator
]