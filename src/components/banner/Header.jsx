import { useState, useEffect } from 'react';
import styled from "styled-components"
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


return (
    <HeaderContainer $isScrolled={isScrolled}>
    <Container>   
        <Logo to="/">
          <LogoIcon>🍞</LogoIcon>
          <LogoText>Hapanjuuri ajastin</LogoText>
        </Logo>

        <MobileMenuButton onClick={toggleMobileMenu}>
          <span>☰</span>
        </MobileMenuButton>

        <Nav $isOpen={isMobileMenuOpen}>
            <NavLink to="/laskuri" $isActive={location.pathname === '/laskuri'} onClick={() => setIsMobileMenuOpen(false)} >Laskuri</NavLink>
            <NavLink to="/ajastin" $isActive={location.pathname === '/ajastin'} onClick={() => setIsMobileMenuOpen(false)}>Ajastin</NavLink>
            <NavLink to="/ohje" $isActive={location.pathname === '/ohje'} onClick={() => setIsMobileMenuOpen(false)}>Ohje</NavLink>
            <NavLink to="/" $isActive={location.pathname === '/'} onClick={() => setIsMobileMenuOpen(false)}>Info</NavLink>
        </Nav>
    </Container>
    </HeaderContainer>
);
};

export default Header

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color:rgb(255, 248, 232);
  border-bottom: 1px solid rgb(250, 236, 208);
  box-shadow: ${props => props.$isScrolled ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'};
  transition: all 0.3s ease;
  z-index: 1000;
  
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 0;

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

const Logo = styled(RouterLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
  z-index: 1001;

  &:hover {
    transform: scale(1.02);
    
    @media (max-width: 768px) {
    gap: 0.5rem;
  }
  }
`;

const LogoIcon = styled.span`
  font-size: 2.5rem;
  transition: transform 0.3s ease;

  ${Logo}:hover & {
    transform: rotate(10deg);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const LogoText = styled.h1`
  font-weight: 700;
  font-size: 2.2rem;
  color: #8B7D5B;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: #8B7D5B;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Nav = styled.nav`
    display: flex;
    gap: 2rem;
    align-items: center;

    @media (max-width: 768px) {
      position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 70%;
    background-color: rgb(255, 248, 232);
    flex-direction: column;
    gap: 1rem;
    padding: 5rem 2rem;
    transform: translateX(${props => props.$isOpen ? '0' : '100%'});
    transition: transform 0.3s ease;
    box-shadow: ${props => props.$isOpen ? '-4px 0 12px rgba(0,0,0,0.1)' : 'none'};
    }
`;

const NavLink = styled(RouterLink)`
  text-decoration: none;
  color: #8B7D5B;
  font-weight: ${props => props.$isActive ? '600' : '500'};
  font-size: 1.8rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;
  

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    background-color: #8B7D5B;
    transform: translateX(-50%);
    transition: width 0.2s ease;
  }
    
    &:hover {
      color: #8B7D5B;
      background-color: rgba(139, 125, 91, 0.08);

      &::after {
      width: 100%;
    }
}

    @media (max-width: 768px) {
      font-size: 1.4rem;
      width: 100%;
      text-align: center;
  }
`;

