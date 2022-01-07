import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  &* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  html {
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
  }
  body {
    background-color: #2C3A47;
    color: #F8EFBA;
  }

`
