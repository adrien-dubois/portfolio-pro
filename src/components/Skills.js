import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../subComponents/Layout';
import Title from '../subComponents/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            <Title title={'Langages'} span={'langages'} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar 
                        title={'HTML5'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar 
                        title={'CSS3'}
                        width={'85%'}
                        text={'85%'}
                    />
                    <ProgressBar 
                        title={'PHP'}
                        width={'80%'}
                        text={'80%'}
                    />
                    <ProgressBar 
                        title={'SYMFONY'}
                        width={'80%'}
                        text={'80%'}
                    />
                    <ProgressBar 
                        title={'JAVASCRIPT'}
                        width={'55%'}
                        text={'55%'}
                    />
                    <ProgressBar 
                        title={'TWIG'}
                        width={'70%'}
                        text={'70%'}
                    />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
    }
`

export default Skills;
