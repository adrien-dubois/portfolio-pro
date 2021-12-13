import React from 'react'
import styled from 'styled-components';

function ResumeData({year, title, subTitle, text}) {
    return (
        <ResumeDataStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5> <br />
                <h6>{subTitle}</h6>
                <p>{text}</p>
            </div>
        </ResumeDataStyled>
    )
}

const ResumeDataStyled = styled.div`
display: flex;
&:not(:last-child){
    padding-bottom: 3rem;
}
    .left-content{
        width: 20%;
        padding-left: 20px;
        position: relative;
        &::before{
            content: '';
            position: absolute;
            left: -10px;
            top: 5px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid #2e344e;
            background-color: #000;
        }
        p{
            display: inline-block;
            color: #9C9BAC;
            font-size: 1.4rem;
        }
    }
    .right-content{
        width: 45%;
        padding-left:5rem;
        position: relative;
        &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 15px;
            height: 2px;
            width: 3rem;
            background-color: #2e344e;
        }
        h5{
            color: #007BFF;
            font-size: 1.8rem;
            padding-bottom: .4rem;
            font-weight: 300;
        }
        h6{
            padding-bottom: .6rem;
            font-size: 1.2rem;
            font-weight: 300;
        }
        p{
            color: #9C9BAC;
        }
    }
`;
export default ResumeData;
