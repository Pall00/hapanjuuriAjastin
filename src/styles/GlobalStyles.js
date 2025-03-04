import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --lighter: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  }

  body {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background.main};
    color: #fff;
    font-family: 'Helvetica Neue', sans-serif;
  }
`

export default GlobalStyles
