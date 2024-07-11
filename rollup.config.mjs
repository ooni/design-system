import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
import { dts } from 'rollup-plugin-dts'
import filesize from 'rollup-plugin-filesize'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { visualizer } from 'rollup-plugin-visualizer'
import packageJson from './package.json' assert { type: 'json' }

const extensions = ['.ts', '.tsx']
const mainBundle = {
  input: './src/index.ts',
  output: [
    {
      file: packageJson.main,
      exports: 'named',
      interop: 'auto',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      interop: 'auto',
      sourcemap: true,
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
    typescript({
      tsconfig: './tsconfig.json',
      exclude: [
        'node_modules',
        'dist',
        '**/__test__/*',
        '**/__mocks__/*',
        '**/stories/*',
      ],
    }),
    copy({
      targets: [
        {
          src: './src/tailwind.css',
          dest: './dist',
        },
      ],
    }),
    resolve(),
    terser({ compress: { evaluate: false } }),
    filesize(),
    visualizer(),
  ],
}

const iconBundle = {
  input: './src/components/icons/index.ts',
  output: [
    {
      file: 'dist/ooni-components-icons.cjs.js',
      exports: 'named',
      interop: 'auto',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/ooni-components-icons.esm.js',
      format: 'esm',
      interop: 'auto',
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
    filesize(),
    visualizer(),
  ],
}

const declarationGenerator = {
  input: 'dist/types/src/index.d.ts',
  output: [{ file: 'dist/index.d.ts', format: 'esm' }],
  plugins: [
    dts(),
    del({
      targets: './dist/types',
      hook: 'buildEnd',
    }),
  ],
}

const iconDeclarationGenerator = {
  input: 'dist/icons/types/index.d.ts',
  output: [{ file: 'dist/ooni-components-icons.d.ts', format: 'esm' }],
  plugins: [
    dts(),
    del({
      targets: './dist/icons',
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
