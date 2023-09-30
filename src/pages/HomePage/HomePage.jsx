import { useContext, useEffect, useState } from "react";
import React from 'react';
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { CardContainer, ContainerPokemon, Header, PaginaçaoDiv, Properties } from "./styled";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const HomePage = () => {

  const { listaPokemon, setListaPokemon, cart, setCart,
    pagina, handleChange
  } = useContext(GlobalStateContext)

  const removeFromPokemon = (name) => {
    const listaPokemonNewCart = [...listaPokemon];
    const indexProduct = listaPokemon.findIndex((pokemon) => {
      return pokemon.name === name;
    });
    listaPokemonNewCart.splice(indexProduct, 1);
    setListaPokemon(listaPokemonNewCart);
  };

  const addPokemonInPokedex = (pokemon) => {

    const findPokeCart = cart.findIndex(poke => poke.name == pokemon.name)
    if (findPokeCart == -1) {
      const newCart = [...cart]
      newCart.push({ ...pokemon })
      setCart(newCart)
      removeFromPokemon(pokemon.name)
    } else {
      alert('voce ja adicionou esse pokemon na pokedex !')
    }
  }

  return (
    <Header>
      <ContainerPokemon>
      
        {listaPokemon && listaPokemon.map((pokemon, index) => {
          return (
            <CardContainer key={pokemon.url}>
              <CardPokemon key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
                addPokemon={() => addPokemonInPokedex(pokemon, index)}
              />
              <Button variant="contained" onClick={() => addPokemonInPokedex(pokemon, index)}>Adicionar a pokedex</Button>
            </CardContainer>
          )
        })}
      </ContainerPokemon>
      <PaginaçaoDiv>
        <Stack spacing={2}>

          <Pagination sx={Properties} count={13} page={pagina} onChange={handleChange} color="primary"
          />
        </Stack>
      </PaginaçaoDiv>
    </Header>
  );
}

export default HomePage;
