import { FaPizzaSlice, FaHamburger } from "react-icons/fa"
import { GiNoodles, GiBread } from "react-icons/gi"
import styled from "styled-components";
import { NavLink } from 'react-router-dom'

function Category() {
    return (  
        <List>
            <SLink to={'cuisine/italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to={'cuisine/american'}>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to={'cuisine/thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink >
            <SLink to={'cuisine/french'}>
                <GiBread />
                <h4>French</h4>
            </SLink>
        </List>
    )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2em;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6em;
    height: 6em;
    color: white;
    cursor: pointer;
    font-size: 0.8rem;

    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
    }
`;
 
export default Category;