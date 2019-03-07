import atoms from './atoms'
import molecules from './molecules'
import organisms from './organisms'

import BarChart from './charts/BarChart'
import PieChart from './charts/PieChart'

/* OONI produced atoms */

export const Button = atoms.Button
export const Input = atoms.Input
export const RadioButton = atoms.RadioButton
export const RadioGroup = atoms.RadioGroup
export const TwitterShareButton = atoms.TwitterShareButton
export const FacebookShareButton = atoms.FacebookShareButton
export const Heading = atoms.Heading
export const Text = atoms.Text
export const Select = atoms.Select
export const Container = atoms.Container

/* OONI produced molecules */
export const InputWithIconButton = molecules.InputWithIconButton
export const LogoOONIRun = molecules.LogoOONIRun
export const Card = molecules.Card

/* OONI produced organisms */
export const Hero = organisms.Hero
export const HeroLead = organisms.HeroLead
export const Modal = organisms.Modal

/* Here we just export rebass until we implement all of these */
import {
  Absolute,
  Arrow,
  Avatar,
  BackgroundImage,
  Badge,
  Banner,
  BlockLink,
  Blockquote,
  Border,
  ButtonCircle,
  ButtonOutline,
  ButtonTransparent,
  Carousel,
  CarouselSlide,
  Checkbox,
  Circle,
  Close,
  Code,
  Column,
  Divider,
  Donut,
  DotButton,
  Drawer,
  Embed,
  Fixed,
  Group,
  Image,
  Label,
  Lead,
  Link,
  Measure,
  Media,
  Message,
  NavLink,
  Overlay,
  Panel,
  PanelFooter,
  PanelHeader,
  Pre,
  Progress,
  Radio,
  Relative,
  Row,
  Samp,
  ScrollCarousel,
  Slider,
  Small,
  Star,
  Sticky,
  Subhead,
  Switch,
  TabItem,
  Tabs,
  Textarea,
  Toolbar,
  Tooltip,
  Truncate
} from 'rebass'

export { default as BarChart } from './charts/BarChart'
export { default as PieChart } from './charts/PieChart'

const components = {
  Button,
  Heading,
  Text,
  Input,
  Select,
  Card,
  RadioButton,
  RadioGroup,
  InputWithIconButton,
  HeroLead,
  Hero,
  LogoOONIRun,
  TwitterShareButton,
  FacebookShareButton,
  Modal,
  BarChart,
  PieChart,
  Absolute,
  Arrow,
  Avatar,
  BackgroundImage,
  Badge,
  Banner,
  BlockLink,
  Blockquote,
  Border,
  ButtonCircle,
  ButtonOutline,
  ButtonTransparent,
  Carousel,
  CarouselSlide,
  Checkbox,
  Circle,
  Close,
  Code,
  Column,
  Container,
  Divider,
  Donut,
  DotButton,
  Drawer,
  Embed,
  Fixed,
  Group,
  Image,
  Label,
  Lead,
  Link,
  Measure,
  Media,
  Message,
  NavLink,
  Overlay,
  Panel,
  PanelFooter,
  PanelHeader,
  Pre,
  Progress,
  Radio,
  Relative,
  Row,
  Samp,
  ScrollCarousel,
  Slider,
  Small,
  Star,
  Sticky,
  Subhead,
  Switch,
  TabItem,
  Tabs,
  Textarea,
  Toolbar,
  Tooltip,
  Truncate
}

export default components
