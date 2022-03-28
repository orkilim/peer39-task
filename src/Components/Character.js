import React from 'react'
import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate,useParams } from 'react-router-dom';

const Character=()=>{

    const [character,setCharacter]=useState({})

    let navigate=useNavigate()
    let params=useParams()

    let occupations=""

    useEffect(()=>{
        const name=params.name
        axios.get(`https://www.breakingbadapi.com/api/characters?name=${name}`)
        .then((data)=>{
            data.data.forEach(character => {
                if(character.name==name)
                {
                    setCharacter(character)   
                    return    
                }
            });
            
        })
        .catch((err)=>{
            console.log("problem in axios in useEffect in Character component",err)
        })
    },[])


    return(
        <div className='wrapper'>
            <div>

            </div>
            {
                character?
                <div className='wrapper'>
                <img className='characterimage' src={character.img} alt={character.name+"'s image"} />
                <br/>
                <b>{character.name}</b>
                <br/>
                Date of Birth: {character.birthday}
                <br/>
                Nickname: {character.nickname}
                <br/>
                Status: {character.status}
                <br/>
                Occupations: {character.occupation}
                </div>
                :<text>Loading character...</text>
            }
        </div>
    )
}

export default Character