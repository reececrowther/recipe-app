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
    margin: 4rem 0;

    h3{
        text-align: center;
        margin-bottom: 2rem;
        font-size: 2rem;
    }
`;


 
export default Veggie;