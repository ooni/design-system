import type { StorybookConfig } from '@storybook/react-webpack5'
const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // '@storybook/addon-styling',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  // webpackFinal: async (config) => {
  //   const assetRule = config.module.rules.find(({ test }) => test.test('.svg'))

  //   const assetLoader = {
  //     loader: assetRule.loader,
  //     options: assetRule.options || assetRule.query,
  //   }

  //   // Merge our rule with existing assetLoader rules
  //   config.module.rules.unshift({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack', assetLoader],
  //   })

  //   return config
  // },
}
export default config
