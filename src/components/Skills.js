import React from 'react'
import styled from 'styled-components';
import { InnerLayout, MainLayout } from '../subComponents/Layout';
import Title from '../subComponents/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            <MainLayout>
                <Title title={'Curriculum Vitae'} span={'cv'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'70%'}
                            text={'70%'}
                        />
                    </div>
                </InnerLayout>
            </MainLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`

`

export default Skills;
