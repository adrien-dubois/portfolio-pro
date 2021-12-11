import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";



import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from "../subComponents/ParticleComponent";

import astronaut from '../assets/Images/spaceman.png';
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden; 
`

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`

const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index:3;
line-height: 1.5;

display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(5rem + 5vw);
top: 10rem;

font-family: 'Ubuntu Mono',monospace;
font-style: italic;
`

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark'/>
                <SocialIcons theme='dark'/>
                <PowerButton />
                <ParticleComponent theme='dark'/>
                
                <Spaceman>
                    <img src={astronaut} alt="Spaceman" />
                </Spaceman>
                <Main>
                Développeur Web Backend, je bénéficie d'une expérience pratique dans la réalisation de sites web, en particulier e-commerces PHP et PHP Symfony, gestion et création de base de données acquise au cours de mon expérience.
                <br /> <br />
                Étant curieux de nature, aimant apprendre et acquérir de nouvelles connaissances, c'est donc naturellement que je me dirige aussi vers le Frontend afin de bénéficier d'une polyvalence dans mes compétences. 
                <br /> <br />
                Doté d'une grande capacité d'adaptation, je sais me montrer proactif, force de proposition et digne de confiance dans la réalisation de mes missions. <br />Je suis également passionné par les langues ainsi que la lecture.
                </Main>

                <BigTitle text="ADRIEN" top="10%" left="5%" />

            </Box>
        </ThemeProvider>
    )
}

export default AboutPage