import styled from 'styled-components'

export const WinCard=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border:2px solid #ffffff33;
    margin:50px;
    padding:20px;
    border-radius: 10px;
    background-color: #ffffff33;
    @media screen and (max-width:576px){
        flex-direction: column;
    }
`

export const ScoreContainer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:576px){
        order:1;
    }
`

export const Header=styled.h1`
    font-weight: bold;
    color:white;
`

export const Scoring=styled.p`
    color:white;
    font-weight: bold;
`
export const Number=styled.p`
    color:#6a59ff;
    font-weight: bold;
`

export const PlayButton=styled.button`
    border:none;
    background-color:#ffce27;
    color:#3d3d3d;
    border-radius:10px;
    cursor: pointer;
    padding:10px;
`

export const ImageCon=styled.img`
    margin:1px;
    @media screen and (max-width: 576px) {
        order:0;
    }
`