import { motion } from "framer-motion";
import {lazy, Suspense} from "react";

import styled, { ThemeProvider } from "styled-components";
import Loading from "../subComponents/Loading";

import { DarkTheme } from "./Themes";
import { MainLayout } from "../subComponents/Layout";
import Skills from "./Skills";
import Resume from "./Resume";


const ParticleComponent = lazy(() => import ("../subComponents/ParticleComponent"));
const LogoComponent = lazy(() => import ('../subComponents/LogoComponent'));
const SocialIcons = lazy(() => import ('../subComponents/SocialIcons'));
const PowerButton = lazy(() => import ('../subComponents/PowerButton'));

const Box = styled(motion.div)`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100%;
position: relative;
display: flex;  
`

const Container = styled(motion.div)`
margin-top: 4rem;
margin-left: 5rem;
color:${props => props.theme.text};
width: 100%;
`

const BlogPage = () => {

    return (
        <ThemeProvider theme={DarkTheme}>
            <Suspense fallback={<Loading/>}>
                <Box
                key='skills'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}>
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
            </Suspense>
        </ThemeProvider>
    )
}

export default BlogPage