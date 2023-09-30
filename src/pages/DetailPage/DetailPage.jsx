import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardContainer, CardType, CardPokemon, LoadingBar, Loading, Footer } from "./styled";
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import React from 'react';

const DetailPage = () => {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();

  const getPokemon = (params) => {

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/${params.pokeName}`)
      .then((response) => {
        setPokemon({
          name: response.data.species.name,
          photoFront: response.data.sprites.other.dream_world.front_default,
          type: response.data.types,
          stats: response.data.stats,
          photoBack: response.data.sprites.front_default,
          allResorce: response.data.id
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };



  useEffect(() => {
    getPokemon(params);
    
  }, [params]);
  

  return (
    <>
      <CardContainer>
        <CardPokemon>
          <Typography variant="h3" paddingTop={'20px'} gutterBottom component="div">{params.pokeName[0].toUpperCase()}{params.pokeName.substring(1)}</Typography>
          <div><img  src={`${process.env.REACT_APP_PICTUR_URL}/${pokemon.allResorce}.png`} alt={pokemon.name}/></div>
        </CardPokemon>
        <div>
          <h1><strong>Tipo</strong></h1>
        

        {pokemon && pokemon?.type?.map((item, index) => {
          return (
            <CardType key={index}>
              <Typography key={index} variant="h6" gutterBottom component="div">
                {item.type.name}
              </Typography>
            </CardType>
          )
        })}
        {pokemon && pokemon?.stats?.map((status, index) => {
          return (
            <LoadingBar key={index}>
              <strong>{status.stat.name.toUpperCase()}: {status.base_stat}</strong>
              
              <Loading>
                    <LinearProgress
                    sx={ {backgroundColor:'white', height: 10, borderRadius: '5px' } } 
                    variant="determinate" value={(status.base_stat + status.base_stat) / 4 }/>
              </Loading>
            </LoadingBar>
          )
        })}
        </div>
      </CardContainer>
      <Footer><strong>Todos os direitos reservados.</strong></Footer>
    </>
  )
};

export default DetailPage;
