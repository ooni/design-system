import {
  Flex,
  Box
} from 'rebass/styled-components'

import { ThemeProvider as Provider } from 'styled-components'

import colors from './theme/colors'
import theme from './theme/rebassTheme'

export { default as colors } from './theme/colors'
export { default as theme } from './theme/rebassTheme'

import components from './components'

// We export these from rebass directly
export {
  Flex,
  Box
} from 'rebass/styled-components'

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

export const OONIComponents = Object.assign({}, components, { Provider, Box, Flex, colors, theme })

export default OONIComponents
