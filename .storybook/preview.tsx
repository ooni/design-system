import React from 'react'
import type { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme/theme'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        {/* <link
          rel="preload"
          href="../fonts/FiraSans-Regular.woff"
          as="font"
          type="font/woff2"
        /> */}
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
