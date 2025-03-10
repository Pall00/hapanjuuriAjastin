import styled from 'styled-components'
import { useTheme } from '../../hooks/useTheme'

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

const ToggleWrapper = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  outline: none;
`

const ToggleTrack = styled.div`
  width: 50px;
  height: 24px;
  border-radius: 15px;
  background-color: ${({ $isDarkMode, theme }) =>
    $isDarkMode ? theme.colors.background.paper : theme.colors.background.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: ${({ $isDarkMode }) => ($isDarkMode ? 'flex-end' : 'flex-start')};
  transition: all 0.3s ease;
`

const ToggleThumb = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  transition: all 0.3s ease;
`
