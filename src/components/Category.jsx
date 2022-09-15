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
    flex-wrap: wrap;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2em;
    text-decoration: none;
    background: linear-gradient(35deg, #000000, #313131);
    width: 8.5em;
    height: 8.5em;
    color: white;
    cursor: pointer;
    font-size: 0.8rem;
    transition: all .5s;
    border: 4px solid transparent;
    background-size: 110%;
    background-position: center;

    @media (max-width: 630px){
        width: 6.5em;
        height: 6.5em;
        margin-top: 2em;
    }

    :hover{
        border: 4px solid #f27121;
        
        img{
            margin-top: -5em;
        }
    }

    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
        background-size: 110%;
        background-position: center;
    }

    h4{
        font-size: 1rem;

        @media (max-width: 630px){
            font-size: .9em;
        }
    }

    img{
        width: 7em;
        height: 7em;
        margin-top: -4em;

        @media (max-width: 630px){
            width: 5em;
            height: 5em;
        }

    }
`;
 
export default Category;