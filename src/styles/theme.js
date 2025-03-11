const lightTheme = {
  colors: {
    primary: {
      main: 'rgb(139, 125, 91)',
      light: 'rgb(148, 142, 89)',
      dark: 'rgb(117, 106, 78)',
      hover: 'rgba(139, 125, 91, 0.08)',
    },
    background: {
      main: 'rgb(251, 249, 244)',
      paper: 'rgb(255, 248, 232)',
      card: 'rgb(245, 239, 217)',
    },
    border: 'rgb(231, 223, 198)',
    error: 'rgb(183, 28, 28)',
    success: 'rgb(46, 125, 50)',
    text: {
      primary: 'rgb(139, 125, 91)',
      secondary: 'rgb(92, 85, 69)',
    },
  },
  spacing: (multiplier = 1) => `${0.25 * multiplier}rem`,
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.05)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.05)',
    large: '0 8px 24px rgba(0, 0, 0, 0.1)',
  },
  borderRadius: {
    small: '6px',
    medium: '8px',
    large: '12px',
  },
}

const darkTheme = {
  colors: {
    primary: {
      main: 'rgb(168, 155, 118)',
      light: 'rgb(180, 170, 130)',
      dark: 'rgb(139, 125, 91)',
      hover: 'rgba(168, 155, 118, 0.15)',
    },
    background: {
      main: 'rgb(36, 36, 36)',
      paper: 'rgb(45, 45, 45)',
      card: 'rgb(55, 55, 55)',
    },
    border: 'rgb(75, 75, 75)',
    error: 'rgb(207, 102, 121)',
    success: 'rgb(76, 175, 80)',
    text: {
      primary: 'rgb(232, 230, 225)',
      secondary: 'rgb(188, 186, 180)',
    },
  },
  spacing: lightTheme.spacing,
  breakpoints: lightTheme.breakpoints,
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.2)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.3)',
    large: '0 8px 24px rgba(0, 0, 0, 0.4)',
  },
  borderRadius: lightTheme.borderRadius,
}

export const extendTheme = (theme, isDarkMode) => {
  return {
    ...theme,
    isDarkMode,
  }
}

export { lightTheme, darkTheme }
export default lightTheme
