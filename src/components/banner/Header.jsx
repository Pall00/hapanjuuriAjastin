import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import Notification from '../common/Notification'
import ThemeToggle from '../common/ThemeToggle'
import {
  HeaderContainer,
  NavContainer,
  Logo,
  LogoIcon,
  LogoText,
  MobileMenuButton,
  Nav,
  NavLink,
  NavButton,
  HeaderActions,
  ThemeToggleWrapper,
  MobileThemeToggle,
  ThemeLabel,
} from '../../styles/components/'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLogout = async () => {
    try {
      await logout()
      setShowNotification(true)
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <NavContainer>
        <Logo to="/">
          <LogoIcon>🍞</LogoIcon>
          <LogoText>Hapanjuuri ajastin</LogoText>
        </Logo>

        <HeaderActions>
          <ThemeToggleWrapper>
            <ThemeToggle />
          </ThemeToggleWrapper>

          <MobileMenuButton onClick={toggleMobileMenu}>
            <span>☰</span>
          </MobileMenuButton>
        </HeaderActions>

        <Nav $isOpen={isMobileMenuOpen}>
          <NavLink
            to="/laskuri"
            $isActive={location.pathname === '/laskuri'}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Laskuri
          </NavLink>
          <NavLink
            to="/ajastin"
            $isActive={location.pathname === '/ajastin'}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ajastin
          </NavLink>
          <NavLink
            to="/reseptit"
            $isActive={location.pathname === '/reseptit'}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Reseptit
          </NavLink>
          <NavLink
            to="/ohje"
            $isActive={location.pathname === '/ohje'}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ohje
          </NavLink>
          <NavLink
            to="/"
            $isActive={location.pathname === '/'}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Info
          </NavLink>

          <MobileThemeToggle>
            <ThemeToggle />
            <ThemeLabel>Vaihda teema</ThemeLabel>
          </MobileThemeToggle>

          {user ? (
            <NavButton onClick={handleLogout}>Kirjaudu ulos</NavButton>
          ) : (
            <NavLink to="/auth" $isActive={location.pathname === '/auth'}>
              Kirjaudu
            </NavLink>
          )}
        </Nav>
        {showNotification && (
          <Notification
            message="Olet kirjautunut ulos"
            onClose={() => setShowNotification(false)}
          />
        )}
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header
