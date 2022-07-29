import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { GlobalStyles } from './components/styles/GlobalStyles'

ReactDOM.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
  document.getElementById('root')
)
