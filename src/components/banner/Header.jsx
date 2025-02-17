import { useState, useEffect } from 'react';
import styled from "styled-components"
import { GiSlicedBread } from "react-icons/gi";
import { Link as RouterLink, useLocation } from 'react-router-dom';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

return (
    <HeaderContainer $isScrolled={isScrolled}>
    <Container>   
        <Logo to="/">
            <BreadIcon/>
            <h1>Hapanjuuri ajastin</h1>
        </Logo>
        <Nav>
            <NavLink to="/laskuri" $isActive={location.pathname === '/laskuri'} >Laskuri</NavLink>
            <NavLink to="/ohje" $isActive={location.pathname === '/ohje'}>Ohje</NavLink>
            <NavLink to="/ajastin" $isActive={location.pathname === '/ajastin'}>Ajastin</NavLink>
            <NavLink to="/" $isActive={location.pathname === '/'}>Info</NavLink>
        </Nav>
    </Container>
    </HeaderContainer>
)

}

export default Header

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgb(238, 224, 165);
  box-shadow: ${props => props.$isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'};
  transition: all 0.3s ease;
  z-index: 1000;
  
`;

const Logo = styled(RouterLink)`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.02);
    }

    h1 {
      font-weight: 600;
      font-size: 2.5rem;
      color: rgb(148,110,4);
      margin: 0;
    }
`;

const Container = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0;
`;

const Nav = styled.nav`
    display: flex;
    gap: 2rem;
    align-items: center;

    @media (max-width: 768px) {
        gap: 1rem;
    }
`;

const NavLink = styled(RouterLink)`
  text-decoration: none;
  color: rgb(148, 110, 4);
  font-weight: ${props => props.$isActive ? '600' : '400'};
  font-size: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    background-color: rgb(148, 110, 4);
    transform: translateX(-50%);
    transition: width 0.2s ease;
  }
    
    &:hover {
      color: rgb(148, 110, 4);
      background-color: rgba(148, 110, 4, 0.1);

      &::after {
      width: 100%;
    }
}

    @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 0.4rem 0.8rem;
  }
`;

const BreadIcon = styled(GiSlicedBread)`
  font-size: 3rem;
  color: rgb(148,110,4);
  transition: transform 0.3s ease;

  ${Logo}:hover & {
    transform: rotate(10deg);
  }
`;