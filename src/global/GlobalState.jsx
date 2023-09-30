import { GlobalStateContext } from "./GlobalStateContext"
import { useEffect, useState } from "react"
import React from 'react';
import axios from "axios"

const GlobalState = (props) => {

    const [listaPokemon, setListaPokemon] = useState([])
    const [cart, setCart] = useState([])
    const [pagina, setPagina] = useState(1)
    const [paginaUrl, setPaginaUrl] = useState(0)

    useEffect(()=> {getPokemon()
    }, [cart] )

    const handleChange = (event, value) => {
        
        setPaginaUrl(value - 1);
        setPagina(value)
        window.scrollTo(0, 0);
     };
    
    const getPokemon = () => {
        axios.get(`${process.env.REACT_APP_BASE_URL}?offset=${paginaUrl * 100}&limit=100`)
        .then((response) => {

            let newObjectPoke = [ ...response.data.results ]
            setListaPokemon(newObjectPoke)
        })
        .catch((error) => {
            console.log(error.response)
        })
    }


    

    return (

        <GlobalStateContext.Provider value={
            {
                listaPokemon, setListaPokemon,
                cart, setCart, pagina, setPagina, handleChange
            }
        }>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState
