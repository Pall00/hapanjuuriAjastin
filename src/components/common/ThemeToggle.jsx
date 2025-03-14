import { useTheme } from '../../hooks/useTheme'
import { ToggleWrapper, ToggleTrack, ToggleThumb } from '../../styles/components'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <ToggleWrapper onClick={toggleTheme}>
      <ToggleTrack $isDarkMode={isDarkMode}>
        <ToggleThumb $isDarkMode={isDarkMode}>{isDarkMode ? '🌙' : '☀️'}</ToggleThumb>
      </ToggleTrack>
    </ToggleWrapper>
  )
}

export default ThemeToggle
