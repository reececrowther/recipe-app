import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const recipe = await data.json();
        setSearchedRecipes(recipe.results);
    };

    useEffect(() => {
        getSearched(params.search);
        console.log(params.search);
    }, [params.search]);


  return (
    <Grid>
        {searchedRecipes.map((item) => {
            return(
                <Card key={item.id}>
                    <Link to={'recipe/' + item.id}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3em;
`;

const Card = styled.div`
    img{
        border-radius: 2em;
        width: 100%;
        height: 100%;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1em;
    }
`;

export default Searched