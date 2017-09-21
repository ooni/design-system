import { injectGlobal } from 'styled-components'

import CharterRegular from 'ooni-components/fonts/Charter-Regular.woff'
import CharterBold from 'ooni-components/fonts/Charter-Bold.woff'

import FiraSansLight from 'ooni-components/fonts/FiraSans-Light.woff'
import FiraSansRegular from 'ooni-components/fonts/FiraSans-Regular.woff'
import FiraSansBold from 'ooni-components/fonts/FiraSans-Bold.woff'
import FiraSansSemiBold from 'ooni-components/fonts/FiraSans-SemiBold.woff'

import SourceCodeProBold from 'ooni-components/fonts/SourceCodePro-Bold.woff'
import SourceCodeProRegular from 'ooni-components/fonts/SourceCodePro-Regular.woff'


injectGlobal`
  @font-face {
    font-family: "Fira Sans";
    src: url('${FiraSansLight}') format('woff');
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: "Fira Sans";
    src: url('${FiraSansRegular}') format('woff');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: "Fira Sans";
    src: url('${FiraSansSemiBold}') format('woff');
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: "Fira Sans";
    src: url('${FiraSansBold}') format('woff');
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: "Source Code Pro";
    src: url('${SourceCodeProRegular}') format('woff');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: "Source Code Pro";
    src: url('${SourceCodeProBold}') format('woff');
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: "Charter";
    src: url('${CharterRegular}') format('woff');
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: "Charter";
    src: url('${CharterBold}') format('woff');
    font-style: normal;
    font-weight: 700;
  }
`
