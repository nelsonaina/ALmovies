

import { createContext, useState, useContext,useEffect } from "react";



const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFaves = localStorage.getItem("favorites")

        if (storedFaves) setFavorites(JSON.parse(storedFaves))
    }, [])

    const addToFavorites = (movie) => {
        setFavorites(prevFavorites => {
            localStorage.setItem('favorites', JSON.stringify([...prevFavorites, movie]))
            return [...prevFavorites, movie]
        })
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => {
            const newFavorites = prev.filter(movie => movie.id !== movieId);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            return newFavorites;
        })
    }

    const isFavorites = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }


    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorites
    }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}