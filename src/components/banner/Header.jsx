import styled from "styled-components"
import { GiSlicedBread } from "react-icons/gi";
import { Link as RouterLink} from 'react-router-dom';

const NavLink = styled(RouterLink)`
    text-decoration: none;
    color: #fff;
    font-weight: 400;
    font-size: 2.5rem;
    
    &:hover {
        color: rgba(255, 255, 255, 0.8);
    }
`;


const Header = () => {
return (
    <Container>   
        <Logo>
            <span><GiSlicedBread/></span>
            <h1>Hapanjuuri ajastin</h1>
        </Logo>
        <Nav>
            <NavLink to="/laskuri">Laskuri</NavLink>
            <NavLink to="/ohje">Ohje</NavLink>
            <NavLink to="/ajastin">Ajastin</NavLink>
            <NavLink to="/">Info</NavLink>
        </Nav>
    </Container>
)

}

export default Header

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span{
        font-size: 3rem;
        color:rgb(148, 110, 4);
    }

    h1{
        font-weight: 600;
        font-size: 2.5rem;
    }
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;
`
const Nav = styled.div`
    display: flex;
    gap: 2rem;
        
    
`
