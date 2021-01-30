import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

export default createGlobalStyle`
  ${normalize}

  body,
  html {
    height: 100%;
    margin: 0;
  }

  body {
    ${'' /* font-family: -apple-system, BlinkMacSystemFont, 'Proza Libre', "Libre Franklin", 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif; */}
    font-family: "lato";
    margin: 0 50px;
    ${'' /* font-family: 'Magnum'; */}
    background-color: #233554;
    line-height: 1.4;
    color: pink
  }
`