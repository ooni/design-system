import {
  Provider,
  Flex,
  Box
} from 'rebass'

import colors from './theme/colors'
import theme from './theme/rebassTheme'

export { default as colors } from './theme/colors'
export { default as theme } from './theme/rebassTheme'

import components from './components'

// We export these from rebass directly
export {
  Provider,
  Flex,
  Box
} from 'rebass'

export const OONIComponents = Object.assign({}, components, { Provider, Box, Flex, colors, theme })

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
  HeroLead,
  Hero,
  OONISubBrandRun
} = components

export default OONIComponents
