import React from 'react'
import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Episode = () => {

    let navigate = useNavigate();
    let params = useParams()

    const [episode, setEpisode] = useState({})
    const [characters, setCharacters] = useState([])
    const [allEpisodes, setAll] = useState([])

    useEffect(() => {
        axios.get(`https://www.breakingbadapi.com/api/episodes/${params.id}`)
            .then((data) => {
                const episode = data.data[0]
                setEpisode(episode)
                setCharacters(episode.characters)
            })
            .catch((err) => {
                console.log("problem in axios in useEffect in Episode Component is: ", err)
            })
        axios.get(`https://www.breakingbadapi.com/api/episodes`)
            .then((data) => {
                let titles=[]
                
                const myEpisodes=data.data
                myEpisodes.forEach(title => {
                    titles.push(title)
                });
                setAll(titles)
            })
    }, [params.id])

    return (
        <div style={{display:"flex"}}>
            <div className='other_episodes'>
                {
                    allEpisodes.map((item,index)=>{
                        return(
                            <div key={index} >
                            <Link key={index} style={{color:"black"}} to={`/episode/${item.episode_id}`} >{item.episode_id+". "+item.title}</Link>
                            <br/>
                            </div>
                        )
                    })
                }
            </div>
            <div className='wrapper'>
                {
                    episode ? (
                        <div className='specific_episode'>
                            <b>{episode.title}</b>
                            <br />
                            Aired at: {episode.air_date}
                            <br />
                            {
                                characters.map((item, index) => {
                                    return <Link style={{ textDecoration: "none", color: "black" }} key={index} to={`/character/${item}`} >{item + ",\n"}</Link>
                                })
                            }
                        </div>
                    ) : (<text>Loading episode info...</text>)
                }
            </div>
        </div>
    )
}

export default Episode

