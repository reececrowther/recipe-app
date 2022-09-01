import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";
import { BsFillHandThumbsUpFill } from 'react-icons/bs'


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
                    perPage: 3,
                    arrows: false,
                    gap: '3em',
                    padding: { left: '1rem', right: '1rem' },
                    breakpoints: {
                        1000: {
                            perPage: 2,
                        },
                        600: {
                            perPage: 1,
                            gap: '1em',
                        },
                    },
                }}>
                    {popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <div className="recipe-card">
                                    <Link to={'/recipe/' + recipe.id}>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <div className="recipe-card-info">
                                        <h4>{recipe.title}</h4>
                                        <p dangerouslySetInnerHTML={{__html: recipe.summary}}></p>
                                        <div className="card-bottom-info">
                                            <div className="dish-type">{recipe.dishTypes[0]}</div>
                                            <div className="recipe-likes"><BsFillHandThumbsUpFill/> {recipe.aggregateLikes}</div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
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

    h3{
        text-align: center;
        margin-bottom: 2rem;
        font-size: 2rem;
    }

    .splide__slide:nth-child(odd){
        margin-top: 1em;
    }
`;


export default Popular;