import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { GlobalStyles } from './GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App title="App Typescript & React" subtitle="" />
  </React.StrictMode>,
  document.getElementById('root')
)
