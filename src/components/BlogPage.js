import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme, lightTheme } from "./Themes";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';

import BigTitle from "../subComponents/BigTitle";
import Title from "../subComponents/Title";
import SmallTitle from "../subComponents/SmallTitle";
import Skills from "./Skills";

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
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
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark'/>
                <SocialIcons theme='dark'/>
                <PowerButton />
                <Container>
                    <Skills />

                </Container>
                {/* <Title title={'Parcours'} span={'parcours'} />
                <InnerLayout>
                    <SmallTitle icon={briefcase} title={'Expérience'} />
                </InnerLayout> */}

                
            </Box>
        </ThemeProvider>
    )
}

export default BlogPage