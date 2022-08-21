import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';



function Veggie(){


    const [veggie, setVeggie] = useState([]);


    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {

        const check = localStorage.getItem("veggie");

        if (check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15&tags=vegetarian`);
            const data = await api.json();
            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        }


    };


    return ( 
        <div>

            <Wrapper>
                <h3>Veggie Recipes</h3>
                <Splide options={{
                    perPage: 3,
                    arrows: false,
                    gap: '5em',
                }}>
                    {veggie.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <Gradient />
                                </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>

        </div>
     )
}


const Wrapper = styled.div`
    margin: 4rem 0;
`;

const Card = styled.div`
    min-height: 15em;
    border-radius: 2em;
    overflow: hidden;
    position: relative;

    img{
        border-radius: 2em;
        object-fit: cover;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
    }

    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0);
        padding: 0 1em;
        color: white;
        width: 100%;
        text-align: center;
        font-size: 1rem;
        font-weight: 600;
        height: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Gradient = styled.div`
      z-index: 5;
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));

`;
 
export default Veggie;