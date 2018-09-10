import { injectGlobal } from 'styled-components'

injectGlobal`
  html {
    font-size: 125%; // 20px = 20/16(browsers default font size) = 125
    font-family: sans;
    background-color: hsl(0, 0%, 96%);
    height: 100%;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100%;
    padding: 1.25rem 0;
  }
`
