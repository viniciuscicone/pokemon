import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #aaaa;
    padding-bottom: 50px;
    padding-top: 50px;
`   

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: blue;
`

export const CardType = styled.div`
    display: flex;
    font-size: 12px;
    background-color: #FFFFFF;
    opacity: 0.7;
    color: black;
    padding: 2px 10px;
    margin: 0.5vh;
`

export const CardPokemon = styled.div`
    display: flex;
    width: 90%;
    justify-content: center;
    align-items: center;  
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
    background-color: #d7dde4;
    color: #FFFFFF;
    padding: 0 5px;
    cursor: pointer;
    border-radius: 30px 0 30px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin: 2vh;
    img {
            width: 200px
        }
    @media screen and (max-width: 600px) {
        
        img {
            width: 30vw
        }


    }

`
export const LoadingBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw ;
    margin: 2vh;
    justify-content: center;
    align-items: flex-start;
    .MuiLinearProgress-bar{
        border-radius: 10px;
        background-color: #9e2828fa
    }
`
export const Loading = styled.div`

    height: 100%;
    width: 100%;

`

export const Footer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 20px 0;
    background-color: #c91700;
    box-shadow: 0px -10px 30px 10px rgba(0, 0, 0, 0.199)
`

