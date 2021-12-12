import React from 'react'
import styled from 'styled-components'

function ProgressBar({title, width, text}) {
    return (
        <ProgressBarStyled>
            <Title>{title}</Title>
            <div className="progress-bar">
                <Text>{text}</Text>
                <div className="progress">
                    <span style={{width: width}}></span>
                </div>
            </div>
        </ProgressBarStyled>
    )
}

const ProgressBarStyled = styled.div`
    .progress-bar{
        display: flex;
        align-items: center;
        .progress{
            position: relative;
            width: 100%;
            height: .4rem;
            background-color: #2e344e;
            span{
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
                background-color: #007bff;
            }
        }
    }
`

const Title = styled.h4`
color: #FFF;
font-size: 1.2rem;
padding-bottom: .6rem
font-weight: 300;
`

const Text = styled.p`
color: #555;
font-size: 1.1rem;
`

export default ProgressBar
