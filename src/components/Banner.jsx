import React,{useState, useEffect} from 'react'
import tmdbAxiosInstance from '../instance';
import './Banner.css'

function Banner({fetchUrl}) {
    // console.log(fetchUrl);
    const base_url = "https://image.tmdb.org/t/p/original/";

    const [movie,setMovie] = useState([])
    const fetchData = async ()=>{
      const {data} = await tmdbAxiosInstance.get(fetchUrl)
    //   setMovie(data.results);
    //   console.log(data.results[Math.floor(Math.random()*data.results.length)]);
      setMovie(data.results[Math.floor(Math.random()*data.results.length)]);

    }
    console.log(movie);
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div style={{
        height:'500px',
        backgroundImage:`url(${base_url}/${movie.backdrop_path})`,
        backgroundSize:'cover',
        backgroundAttachment:'fixed'
    }}>
       <div className="banner_content">
        <h1>{movie?.name}</h1>
        <h2>{movie?.overview?.slice(0,280)}...</h2>
       </div>
        </div>
  )
}

export default Banner