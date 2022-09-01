import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";


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
                    perPage: 4,
                    arrows: false,
                    gap: '2em',
                    padding: { left: '1rem', right: '1rem' },
                    breakpoints: {
                        1000: {
                            perPage: 3,
                        },
                        840: {
                            perPage: 2,
                            gap: '1em',
                        },
                        550: {
                            perPage: 1,
                            gap: '1em',
                        },
                    },
                }}>
                    {veggie.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <div className="recipe-card">
                                    <Link to={'/recipe/' + recipe.id}>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <div className="recipe-card-info">
                                        <h4>{recipe.title}</h4>
                                        <p dangerouslySetInnerHTML={{__html: recipe.summary}}></p>
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
    padding: 4rem 0;
    position: relative;
    

    h3{
        text-align: center;
        margin-bottom: 2rem;
        font-size: 2rem;
    }
    ::before{
        content: "";
        position: absolute;
        z-index: -1;
        border-radius: 1em;
        background: #BDDCA8;
        width: 100%;
        height: 50%;
        top: 45%;
        left: -2em;
        padding: 0 2em;
    }

    .splide__pagination__page{
        background: #6aad3e !important;
        margin: 5px;
    }

    .splide__pagination__page.is-active{
        background: #398002 !important;
        width: 20px;
        border-radius: 20px;
        opacity: 1;
    }
    
`;


 
export default Veggie;