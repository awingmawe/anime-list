import styled, { css } from "styled-components";

export const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    ${props => props.cursor && css`
        cursor:pointer;
  `}
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    border-collapse: separate;
    border-radius : 12px;
    transition : all .35s ease-in-out; 

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 10px;

    ${props => props.hover &&
        css`
        &:hover{
            transform : scale(1.05);
        }
    `};

    ${props => props.padding &&
        css`
        padding : ${props.padding}
    `};
`

export const CardTitle = styled.h1`
    text-align:center;    
    display:inline-block;
    width:100%;
    font-size : 16px;
    cursor:pointer;
    transition : color 0.35s ease-in-out;

    &:hover{
        color:grey;
    }
`

export const CardImage = styled.img`
    object-fit : contain;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    
    ${props => props.width &&
        css`
          width: ${props.width};
          margin:auto;
    `};
`

export const CardDetail = styled.div`
    display : inline-block;
    width:100%;
    text-align:right;
    background: black;
    color: white;

    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;

    ${props => props.width &&
        css`
          width: ${props.width};
          margin:auto;
    `};
`
