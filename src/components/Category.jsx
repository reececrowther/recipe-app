import { FaPizzaSlice, FaHamburger } from "react-icons/fa"
import { GiNoodles, GiBread } from "react-icons/gi"
import styled from "styled-components";
import { NavLink } from 'react-router-dom'

function Category() {
    return (  
        <List>
            <NavLink to={'cuisine/italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>
            <NavLink to={'cuisine/american'}>
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
            <NavLink to={'cuisine/thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </NavLink >
            <NavLink to={'cuisine/french'}>
                <GiBread />
                <h4>French</h4>
            </NavLink>
        </List>
    )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`
 
export default Category;