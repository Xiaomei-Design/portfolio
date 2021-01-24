import { createGlobalStyle } from 'styled-components';

import Magnum from './Magnum.woff';
import Magnum_2 from './Magnum.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: "Magnum";
    src: local("Magnum"), local('Magnum_2'),
    url(${Magnum_2}) format('woff2'),
    url(${Magnum}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
`