import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../subComponents/Layout';
import SmallTitle from '../subComponents/SmallTitle';
import Title from '../subComponents/Title';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ResumeData from '../data/ResumeData';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    return (
        
        <ResumeStyled>
            <Title title={'Curriculum Vitae'} span={'cv'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Mon Parcours'} />
                </div>
                <div className="resume-content">
                    <ResumeData 
                        year={'Juillet 2021'} 
                        title={'Spécialisation Symfony'} 
                        subTitle={'École O\'Clock'} 
                        text={"Après une formation de développeur web backend, j'ai effectué une spécialisation sur le Framework Symfony, afin d'approfondir mes connaissances dans le domaine de la programmation PHP."} 
                    />
                    <ResumeData 
                        year={'Mai 2021'} 
                        title={'Formation Web Développeur'} 
                        subTitle={'École O\'Clock'} 
                        text={"Suite à une reconversion professionnelle, j'ai effecuté une formation en distanciel avec l'école O'Clock, durant laquelle j'ai pu développer de nombreuses compétences dans le domaine Backend."} 
                    />
                    <ResumeData 
                        year={'Novembre 2020'} 
                        title={'Stage Web Designer'} 
                        subTitle={'Karte Blanche Vichy'} 
                        text={"Stage dans l'agence de communication Vichyssoise Karte Blanche, de WebDesign. Après lequel j'ai décidé de me diriger dans le domaine du développement Web afin de pouvoir répondre à une demande plus forte de ce dernier sur le marché de l'emploi et de compléter mes compétences de Webdesign"} 
                    />
                    <ResumeData 
                        year={'2003 - 2019'} 
                        title={'Cuisinier / Chef de cuisine'} 
                        subTitle={'Toute la France'} 
                        text={"Ancienne carrière de chef de cuisine"} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
        
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }

    .resume-content{
        border-left: 1px solid #2e344e;
    }
`

export default Resume
