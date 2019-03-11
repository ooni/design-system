import styled from 'styled-components'
import { maxWidth } from 'styled-system'
import { Box } from '@rebass/grid'

// Based on suggestion by `rebass` developer
// https://github.com/rebassjs/grid/issues/166#issuecomment-450678818

const Container = styled(Box)(maxWidth)

Container.defaultProps = {
  px: 3,
  mx: 'auto',
  maxWidth: [768, 1024, 1280]
}

export default Container
