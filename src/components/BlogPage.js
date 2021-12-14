import React, {useState, useEffect} from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import RingLoader from "react-spinners/RingLoader";


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';

import Skills from "./Skills";
import Resume from "./Resume";
import { MainLayout } from "../subComponents/Layout";
import ParticleComponent from "../subComponents/ParticleComponent";
import { css } from "@emotion/react";

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100%;
position: relative;
display: flex;
   
`

const Container = styled.div`
margin-top: 4rem;
margin-left: 5rem;
color:${props => props.theme.text};
width: 100%;
`

const override = css`
position: absolute;
bottom: 10%;
right: 10%;

`

const BlogPage = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <ThemeProvider theme={DarkTheme}>
            {
                loading ?
                    <RingLoader 
                    color={'#000'} 
                    loading={loading}  
                    size={60}
                    css={override}
                    />
                :

                <Box>
                    <LogoComponent theme='dark'/>
                    <SocialIcons theme='dark'/>
                    <PowerButton />
                    <ParticleComponent theme='dark'/>
                    <Container>
                        <MainLayout>
                            <Skills />
                            <Resume />
                        </MainLayout>
                    </Container>

                </Box>
            }
        </ThemeProvider>
    )
}

export default BlogPage