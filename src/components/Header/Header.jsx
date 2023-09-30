import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { HeaderContainer } from './styled';
import { goToHome, goToPokedex } from '../../router/coordinator';
import { useNavigate } from 'react-router-dom';
import pokeapi from '../../assets/pokeapi.png'

const Header = () => {
    const navigate = useNavigate()

    return (
      <AppBar position="static">
        <HeaderContainer>
          <Button variant="outlined" color="inherit" size='medium' onClick={() => goToPokedex(navigate)}>Ir para Pokedex</Button>
          <img title='Ir para Home page' onClick={() => goToHome(navigate)} width='130px'  src={pokeapi} alt='pokeapi'></img>
          <Button variant="outlined" color="inherit" size='medium' onClick={() => goToHome(navigate)}>Voltar</Button>
        </HeaderContainer>
      </AppBar>
  );
}
        

export default Header;