import css from 'styled-jsx/css'

export const colors = {
  default: '#000000',
  border: '#eaeaea',
  blue100: '#000055',
  blue300: '#111155',
  blue500: '#2222DD',
  blue600: '#6666ff',
  white: '#ffffff',
}

// Global
export const global = css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`

// Scoped styles
export const button = css`
  button {
    cursor: pointer;
    font-size: 1em;
    color: ${colors.white};
    background-color: ${colors.blue600};
  }
`

export const link = css`
  a {
    color: ${colors.blue600};
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`
