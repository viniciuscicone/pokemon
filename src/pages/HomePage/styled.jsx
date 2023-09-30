import styled from "styled-components"


export const CardContainer = styled.div`

    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 2vh;
    padding: 0vw;
    justify-content:center;
    border-radius: 30px 0 30px 0 ;
    box-shadow: rgba(68, 68, 76, 0.167) 3px 3px 7px 4px ;

            button {
        margin: 1vw;
        width: 70%;
        height: 40px;
        font-size: 1.5vh; 
        
                

    }
`

export const Header = styled.header`

`

export const Properties = {

    backgroundColor: 'gray',
    fontColor: 'black',
    borderRadius: '10px',
    height: '13vh',
    display: 'flex'
}

export const ContainerPokemon = styled.div`

    display:grid;
    
    grid-template-columns: repeat(4, 2fr);
    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(2, 2fr);

    }
    `

export const PaginaçaoDiv = styled.div`

    display: flex;
    align-items: center;
    border-radius: 10px;
    justify-content: center;
    margin: 1vh 1vh 11vh;
`