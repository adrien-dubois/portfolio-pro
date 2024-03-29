import { motion } from 'framer-motion'
import { lazy, Suspense} from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";

import { DarkTheme, mediaQueries } from "./Themes";
import astronaut from '../assets/Images/spaceman.png';
import Loading from "../subComponents/Loading"

const LogoComponent = lazy(() => import ('../subComponents/LogoComponent'));
const SocialIcons = lazy(() => import ('../subComponents/SocialIcons'));
const PowerButton = lazy(() => import ('../subComponents/PowerButton'));
const ParticleComponent = lazy(() => import ("../subComponents/ParticleComponent"));
const BigTitle = lazy(() => import ("../subComponents/BigTitle"));

const Box = styled(motion.div)`
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

const Spaceman = styled(motion.div)`
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

${mediaQueries(40)`
          width: 60vw;
          height: 50vh;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);


  `};
  ${mediaQueries(30)`
          width: 50vw;
          height: auto;
          backdrop-filter: none;
          margin-top:2rem;

  `};

${mediaQueries(20)`
          padding: 1rem;
          font-size: calc(0.5rem + 1vw);
  `};
`


const AboutPage = () => {

    return (
        <ThemeProvider theme={DarkTheme}>
            <Suspense fallback={<Loading />} >
                <Box
                key='skills'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}>
                    <LogoComponent theme='dark'/>
                    <SocialIcons theme='dark'/>
                    <PowerButton />
                    <ParticleComponent theme='dark'/>
                    
                    <Spaceman
                        initial={{ right: '-20%', top: '100%' }}
                        animate={{
                        right: '5%',
                        top: '10%',
                        transition: { duration: 2, delay: 0.5 },
                    }}>
                        <img src={astronaut} alt="Spaceman" />
                    </Spaceman>
                    <Main
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}>
                    Développeur Web Backend, je bénéficie d'une expérience pratique dans la réalisation de sites web, en particulier e-commerces et PHP Symfony, gestion et création de base de données, acquise au cours de mon expérience.
                    <br /> <br />
                    Étant curieux de nature, aimant apprendre et acquérir de nouvelles connaissances, c'est donc naturellement que je me dirige aussi vers le Frontend afin de bénéficier d'une polyvalence dans mes compétences. 
                    <br /> <br />
                    Doté d'une grande capacité d'adaptation, je sais me montrer proactif, force de proposition et digne de confiance dans la réalisation de mes missions. <br />Je suis également passionné par les langues ainsi que la lecture.
                    </Main>

                    <BigTitle text="ADRIEN" top="10%" left="5%" />

                </Box>
            </Suspense>
        </ThemeProvider>
    )
}

export default AboutPage