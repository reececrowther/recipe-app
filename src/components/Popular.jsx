import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";


function Popular() {

    const [popular, setPopular] = useState([]);


    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {

        const check = localStorage.getItem("popular");

        if (check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15`);
            const data = await api.json();
            localStorage.setItem("popular", JSON.stringify(data.recipes));
            setPopular(data.recipes);
        }


    };


    return (
        <div>

            <Wrapper>
                <h3>Popular Recipes</h3>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    gap: '5em',
                }}>
                    {popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={'/recipe/' + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <Gradient />
                                    </Link>
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
        color: white;
        width: 100%;
        text-align: center;
        font-size: 1rem;
        padding: 0 1em;
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


export default Popular;