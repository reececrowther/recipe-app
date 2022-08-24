import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'

function Recipe() {

    const [detials, setDetials] = useState({});
    let params = useParams();

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detialsData = await data.json();
        setDetials(detialsData);
    }

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

  return (
    <DetailWrapper>
        <div>
            <h2>{detials.title}</h2>
            <img src={detials.image} alt={detials.title} />
        </div>
        <Info>
            <Button>Instructions</Button>
            <Button>Ingredients</Button>
        </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
    display: flex;
    margin: 5em 0;

    h2{
        margin-bottom: 1em;
    }

    li{
        font-size: 1.2rem;
        line-height: 2rem;
    }

    ul{
        margin-top: 1em;
    }
`;

const Button = styled.button`
    padding: 1em 2em;
    color: #313131;
    background: white;
    border: 2px solid #313131;
    margin-right: 2em;
    font-weight: 600;
    
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
`;

const Info = styled.div`
    margin-left: 5em;
    display: flex;
    height: 3em;
`;

export default Recipe