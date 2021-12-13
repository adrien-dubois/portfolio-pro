import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme, lightTheme } from "./Themes";



import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';

import Skills from "./Skills";
import Resume from "./Resume";
import { MainLayout } from "../subComponents/Layout";
import ParticleComponent from "../subComponents/ParticleComponent";

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

const InnerLayout = styled.div`
padding: 5rem 0;
`

const BlogPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
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
        </ThemeProvider>
    )
}

export default BlogPage