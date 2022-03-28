import React from 'react'
import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Home = ({ navigation }) => {

    let navigate = useNavigate();


    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        axios.get(`https://www.breakingbadapi.com/api/episodes`)
            .then((data) => {
                setEpisodes(data.data)
            })
            .catch((err) => {
                console.log("problem with axios in useEffect in Home is: ", err)
            })

    }, [])


    return (
        <div className='wrapper'>
            {
                episodes ?

                    episodes.map((episode, index) => {
                        
                        if (episode.series == "Breaking Bad") {
                            return (
                                <div key={index} className='episode'>
                                    <Link style={{textDecoration:"none",color:"black"}} to={`/episode/${episode.episode_id}`}><b>{episode.title}</b></Link>
                                    <br />
                                    Season {episode.season}
                                    <br />
                                    Aired at: {episode.air_date}
                                </div>
                            )
                        }
                    })

                    : (<text>List of episodes is loading...</text>)
            }
        </div>
    )
}

export default Home


//onClick={navigateToEpisode(navigate(`/episode`, { id: episode.id }))}