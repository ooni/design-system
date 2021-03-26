import {
  Flex,
  Box,
  Link,
} from 'rebass/styled-components'

import { Select, Label } from '@rebass/forms/styled-components'

import { ThemeProvider as Provider } from 'styled-components'

import colors from './theme/colors'
import theme from './theme/rebassTheme'

export { default as colors } from './theme/colors'
export { default as theme } from './theme/rebassTheme'

import components from './components'

// We export these from rebass directly
export {
  Flex,
  Box,
  Link,
} from 'rebass/styled-components'

export {
  Label,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
  Switch
} from '@rebass/forms/styled-components'

export const {
  Button,
  ButtonOutline,
  ButtonCircle,
  ButtonTransparent,
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
  Input,
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
  Arrow,
  Star,
  Embed,
  Donut,
  Row,
  Column,
  RadioGroup,
  RadioButton,
  HeroLead,
  Hero,
  LogoOONIRun,
  InputWithIconButton,
  TwitterShareButton,
  FacebookShareButton,
  Modal,
  BarChart,
  PieChart
} = components

export const OONIComponents = Object.assign({}, components, {
  Provider,
  Box,
  Flex,
  Link,
  colors,
  theme
})

export default OONIComponents
