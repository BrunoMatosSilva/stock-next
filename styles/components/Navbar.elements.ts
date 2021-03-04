import styled from 'styled-components';
import { FaBoxOpen, FaSignOutAlt } from 'react-icons/fa';
import { Container } from '../globalStyles';

export const Nav = styled.nav`
background: #333;
display:flex;
justify-content: center;
width: 100%;
height: 80px;
font-size: 1.2rem;
position: sticky;
top:0;
z-index: 999;
`;

export const NavContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`;

export const NavLogo = styled.a`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`;

export const NavIcon = styled(FaBoxOpen)`
margin-left: 0.5rem;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
    display: block;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;


@media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    opacity: 1;
    transition: all 0.5s ease;
    background: #333;
}
`;

export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

&:hover{
    border-bottom: 2px solid #4b59f7;
}

@media screen and (max-width: 960px) {
    width: 100%;

    &:hover{
        border:none;
    }
}
`;

export const NavLink = styled.a`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

@media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover{
        color: #4b59f7;
        transition: all 0.3s ease;
    }
}
`;

export const NavIconLeave = styled(FaSignOutAlt)`
padding: 0.2rem;
font-size: 2rem;
`;

export const NavLeave = styled.a`
    color: #4b59f7;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

@media screen and (max-width: 960px){
    color: #4b59f7;
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover{
        color: yellow;
        transition: all 0.3s ease;
    }
}
`;