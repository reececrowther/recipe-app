import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GiForkKnifeSpoon } from 'react-icons/gi'


import React from 'react'

function Header() {
  return (
    <Nav>
        <GiForkKnifeSpoon/>
        <Logo to={'/'}>Recipe App</Logo>
    </Nav>
  )
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Dancing Script', cursive;
    color: black;
`;

const Nav = styled.div`
    padding: 4em 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg{
        font-size: 2em;
    }
`

export default Header