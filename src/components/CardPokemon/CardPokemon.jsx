import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import goToPokemonDetail from "../../router/coordinator"
/* import  goToPokemonDetail  from "../../Router/coordinator.jsx" */
import { Buttons, DivCardPokemon } from "./styled"
import React from 'react';
import { Button } from "@mui/material"

const CardPokemon = ({ name }) => {

  const navigate = useNavigate()
  const [photo, setPhoto] = useState({})

  const getPhoto = (name) => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/${name}`)
      .then((response) => {
        setPhoto({

          photofront_shiny: response.data.sprites,
          photofront_default: response.data.sprites.front_default,
          others: response.data.id,
          others1: response.data

        })
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  useEffect(() => {  getPhoto(name) }, [])

  return (
    <>
      <DivCardPokemon key={name} >
        
        <p><strong>{name[0].toUpperCase()}{name.substring(1)}</strong></p>
        <img height={'100vh'} src={photo.others && `${process.env.REACT_APP_PICTUR_URL}/${photo.others}.png`} alt={name} key={name} />
      </DivCardPokemon>
      <Buttons>
        <Button onClick={() => goToPokemonDetail(navigate, name)}>Ver detalhes</Button>
      </Buttons>
    </>
  )
}

export default CardPokemon 
