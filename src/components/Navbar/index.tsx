import React, { useState } from 'react';
import { Nav, NavContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLink, NavLeave, NavIconLeave } from '../../../styles/components/Navbar.elements';
import { FaTimes, FaBars } from 'react-icons/fa';

export const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo>
                        <NavIcon to='/' />
                        STOCK
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick}>
                        <NavItem>
                            <NavLink href='/'>Inicio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/cadastro'>Cadastro</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/estoque'>Estoque</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLeave href='/sair'>
                                Sair <NavIconLeave /></NavLeave>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    );
}

export default Navbar;