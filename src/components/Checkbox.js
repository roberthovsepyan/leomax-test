import React from 'react';
import styled from 'styled-components';

import CheckImg from '../images/checkbox-tick.png';

const Wrapper = styled.div`
    margin: 20px 15px 5px 15px;
    font-size: 0.9em;  
    display: flex;
    align-items: center;
`;

const ImgWrapper = styled.img.attrs({
    src: CheckImg,
    height: '25px',
    alt: 'tick'
})`
    position: absolute;
    top: -10px;
    left: 2px;
`;

export const Checkbox = (props) => {
    const handleCheck = () => {
        props.handleCheck();
    };

    const InputWrapper = styled.span`
        width: 17px;
        height: 17px;
        margin-right: 10px;
        border: ${props.checked ? '1px solid #FFECB3' : '1px solid gray'};
        border-radius: 4px;
        position: relative;
        cursor: pointer;
    `;

    return (
        <Wrapper>
            <InputWrapper onClick={handleCheck}>
                {props.checked && <ImgWrapper/>}
            </InputWrapper>
            {props.label}
        </Wrapper>
    );
};