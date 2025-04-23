import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import HeroSection from '../sections/Home/HeroSection'
import { MoviesContext } from '../context/MoviesInfo'

const Home = () => {
    const {movies,setMovies}=useContext(MoviesContext)
    //Function to retrieve movies 
    const receiveMovies=async ()=>{
        try {
        const res=await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=beb5e4646fbeb5a4a151756e8e47f8ac')
        if(res.status===200){
            const {results}=res?.data
            setMovies(results)
        }
        } catch (error) {
        console.log(error);
        }
    }
    useEffect(()=>{
        receiveMovies()
    },[])
    return (
        <>
            <HeroSection />
        </>
    )
}

export default Home