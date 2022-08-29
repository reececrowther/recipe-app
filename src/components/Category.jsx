import { FaPizzaSlice, FaHamburger } from "react-icons/fa"
import { GiNoodles, GiBread } from "react-icons/gi"
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

function Category() {
    return (  
        <List>
            <SLink to={'cuisine/american'}>
                <img src="/Imgs/3DFrenchFries.png" alt="3DFrenchFries" />
                <h4>American</h4>
            </SLink>
            <SLink to={'cuisine/italian'}>
                <img src="/Imgs/3DPizza.png" alt="3DPizza" />
                <h4>Italian</h4>
            </SLink>
            <SLink to={'cuisine/thai'}>
            <img src="/Imgs/3DDorayaki.png" alt="3DFrenchFries" />
                <h4>Thai</h4>
            </SLink >
            <SLink to={'cuisine/german'}>
                <img src="/Imgs/3DBurger.png" alt="3DFrenchFries" />
                <h4>German</h4>
            </SLink>
        </List>
    )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 2rem;
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
    width: 8.5em;
    height: 8.5em;
    color: white;
    cursor: pointer;
    font-size: 0.8rem;
    transition: all .5s;
    border: 4px solid;

    :hover{
        border: 4px solid #f27121;
        
        img{
            margin-top: -5em;
        }
    }

    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
    }

    h4{
        font-size: 1rem;
    }

    img{
        width: 7em;
        height: 7em;
        margin-top: -4em;
    }
`;
 
export default Category;