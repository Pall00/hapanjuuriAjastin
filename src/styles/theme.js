const theme = {
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
    error: '#B71C1C',
    success: '#2E7D32',
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

export default theme
