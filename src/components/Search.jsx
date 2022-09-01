import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Search() {

const [input, setInput] = useState('');
const navigate = useNavigate();

const submitHandler = (e) =>{
    e.preventDefault();
    navigate('/searched/' + input);
};

useEffect(() => {
    document.querySelector("#searchBar").addEventListener("blur", (event) => {
        if(event.target.value !== ''){
            event.target.nextElementSibling.classList.add("filled");
        }
        else{
            event.target.nextElementSibling.classList.remove("filled");
        }
    });
}, []);

  return (
    <FormStyle onSubmit={submitHandler}>
        <FaSearch />
        <input 
            onChange={(e) => setInput(e.target.value)} 
            id="searchBar"
            type="text" 
            value={input}
            placeholder="Search"
        />
        <label className='label'>Search a recipe</label>
    </FormStyle>
    
  )
}

const FormStyle = styled.form`
    margin: 0 10em;
    position: relative;

    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.2rem;
        color: white;
        padding: 1em 2em;
        border: none;
        border-radius: 1em;
        outline: none;
        width: 100%;
        transition: all .3s;
        border: 2px solid transparent;
    }

    input:focus{
        border: 2px solid #e94057;
    }

    input:focus + label, .filled{
        top: -10px;
        color: #e94057;
        font-size: 12px;
        background: #FAFAFA;
        padding: 2px 9px;
        border-radius: .3em;
        font-weight: 700;
        
    }

    input::placeholder{
        opacity: 0;
        transition: all .3s;
    }

    input:focus::placeholder{
        opacity: 1;
    }

    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }

    label{
        position: absolute;
        left: 3em;
        top: 20px;
        transition: all .2s;
        padding: 0 2px;
        z-index: 1;
        color: white;
        pointer-events: none;
    }
    label::before{
        content: "";
        height: 5px;
        background: linear-gradient(35deg, #494949, #313131);
        left: 0%;
        top: 10px;
        width: 100%;
        z-index: -1;
    }
`;


export default Search