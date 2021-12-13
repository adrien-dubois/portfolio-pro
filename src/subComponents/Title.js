import React from 'react'
import styled from 'styled-components';

function Title({title, span}) {
    return (
        <TitleStyled>
            <h2>{title} <b><span>{span}</span></b></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    h2{
        color: #FFF;
        font-size: 3.1rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .7rem;
        z-index: 5;
        @media screen and (max-width: 496px){
            font-size: 2.8rem;
        }
        @media screen and (max-width: 370px){
            font-size: 2rem;
        }
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 7.4rem;
            height: .33rem;
            background-color: rgba(3,127,255,.3);
            border-radius: 15px;
            left: 0;
        }
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 3.5rem;
            height: .33rem;
            background-color: #007bff;
            border-radius: 15px;
            left: 0;
        }
        span{
            font-weight: 700;
            color: rgba(25,29,43,.44);
            font-size: 5rem;
            position: absolute;
            left: 8%;
            top: 35%;
            z-index: 0;
            @media screen and (max-width: 620px){
                font-size: 4rem;
            }
            @media screen and (max-width: 496px){
                font-size: 3rem;
            }
            @media screen and (max-width: 370px){
                font-size: 2rem;
            }
        }
    }
`;

export default Title;