import { createGlobalStyle } from 'styled-components'
import { device } from '../../const/device'

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
    background-color: #2E3440;
    color: #D8DEE9;
    max-width: 1200px;
    margin: 0 auto;
  }

  .contenedor-grid {
    display: flex;
    width: 100%;

    @media ${device.mobileL} {
    margin-top: 10px 
  }
  }

  .contenedor-grid-columns {
    word-wrap: break-word;
    width: 240px !important;
    height: auto;
    padding-left: 10px; 
    background-clip: padding-box;
  }

  .contenedor-grid-columns > div {
    margin-bottom: 10px;
  }

`
