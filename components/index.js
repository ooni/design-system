import {
  createLibrary,
  Provider,
  Flex,
  Box
} from 'rebass'

import colors from './theme/colors'
import theme from './theme/rebassTheme'

import rebassComponents from 'rebass/dist/components'

export { default as colors } from './theme/colors'
export { default as theme } from './theme/rebassTheme'

// We export these from rebass directly
export {
  Provider,
  Flex,
  Box
} from 'rebass'

export const OONIComponents = Object.assign({}, library, { Provider, Box, Flex, colors, theme })

// We build the library of components from rebass directly
const library = createLibrary(rebassComponents)

export const {
  Button,
  ButtonOutline,
  ButtonCircle,
  ButtonTransparent,
  Link,
  NavLink,
  BlockLink,
  Heading,
  Subhead,
  Text,
  Small,
  Lead,
  Pre,
  Code,
  Samp,
  Blockquote,
  Measure,
  Truncate,
  Label,
  Input,
  Select,
  Select2,
  Textarea,
  Checkbox,
  Radio,
  Slider,
  Image,
  Avatar,
  BackgroundImage,
  Container,
  Divider,
  Border,
  Media,
  Card,
  Banner,
  Panel,
  PanelHeader,
  PanelFooter,
  Progress,
  Message,
  Group,
  Toolbar,
  Badge,
  Circle,
  Tabs,
  TabItem,
  DotButton,
  Close,
  Relative,
  Absolute,
  Fixed,
  Sticky,
  Drawer,
  Overlay,
  Carousel,
  ScrollCarousel,
  CarouselSlide,
  Tooltip,
  Switch,
  Arrow,
  Star,
  Embed,
  Donut,
  Row,
  Column,
} = library

export default OONIComponents
