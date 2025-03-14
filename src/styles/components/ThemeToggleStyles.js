import styled from 'styled-components'

export const ToggleWrapper = styled.button`
  background: none;
  border: none;
  padding: 20px;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`

export const ToggleTrack = styled.div`
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

export const ToggleThumb = styled.div`
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

export const ToggleLabel = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;
  font-size: 0.9rem;
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: ${({ $showOnMobile }) => ($showOnMobile ? 'block' : 'none')};
    font-size: 1.4rem;
  }
`
