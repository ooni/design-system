import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

const properties = defineProperties({
  properties: {
    textStyle: {
      sm: { fontSize: '0.875rem', lineHeight: '1.25rem' },
      md: { fontSize: '1rem', lineHeight: '1.5rem' },
      lg: { fontSize: '1.125rem', lineHeight: '1.75rem' },
      xl: { fontSize: '1.25rem', lineHeight: '1.75rem' },
      xxl: { fontSize: '1.5rem', lineHeight: '2rem' },
    },
  },
})

export const sprinkles = createSprinkles(properties)

export type Sprinkles = Parameters<typeof sprinkles>[0]
