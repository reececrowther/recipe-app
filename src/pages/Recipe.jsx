import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { CgBowl } from 'react-icons/cg'
import { BiTimeFive } from 'react-icons/bi'

import React from 'react'

function Recipe() {

    const [detials, setDetials] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');
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
        <>
    <Wrapper>
        <h2>{detials.title}</h2>
        <QuickDetialsWrapper>
            <QuickDetials>
                <BiTimeFive />
                <h5>{detials.readyInMinutes} Minutes</h5>
            </QuickDetials>
            <QuickDetials>
                <CgBowl />
                <h5>{detials.servings} Servings</h5>
            </QuickDetials>
        </QuickDetialsWrapper>
        <div dangerouslySetInnerHTML={{__html: detials.summary}}></div>
    </Wrapper>
    <DetailWrapper>
        <div>
            <img src={detials.image} alt={detials.title} />
        </div>
        <Info>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Instructions</Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
            {activeTab === 'instructions' && (
            <div>
                <div dangerouslySetInnerHTML={{__html: detials.instructions}}></div>
            </div>
            )}
            {activeTab === 'ingredients' && (
            <ul>
                {detials.extendedIngredients.map((ingredient) => 
                    <li key={ingredient.id}>{ingredient.original}</li>
                )}
            </ul>
            )}
        </Info>
    </DetailWrapper>
    </>
  )
}

const Wrapper = styled.div`
    h2{
        margin: 1em 0;
    }
`

const QuickDetialsWrapper = styled.div`
    display: flex;
    align-items: center;
`

const QuickDetials = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1em;
    margin-bottom: 1em;

    svg{
        margin-right: .5em;
        font-size: 1.3rem;
        color: #e94057;
    }
`

const DetailWrapper = styled.div`
    display: flex;
    margin: 5em 0;

    h2{
        margin-bottom: 1em;
    }

    li{
        font-size: 1rem;
        line-height: 2rem;
    }

    ul{
        margin-left: 2em;
    }
    li{
        padding-left: 1em;
    }
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
`;

const Button = styled.button`
    padding: 1em 2em;
    color: #313131;
    background: white;
    border: 2px solid #313131;
    margin-right: 2em;
    margin-bottom: 2em;
    font-weight: 600;
    cursor: pointer;
    
`;

const Info = styled.div`
    margin-left: 2em;
`;

export default Recipe