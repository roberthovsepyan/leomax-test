import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 4% 6%;
`;

const HeadingWrapper = styled.p`
    margin: 0 10px 30px 15px;
    font-size: 1em;
    font-weight: bold;
`;

const InputWrapper = styled.input`
    margin-left: 15px;
    font-size: 1.3em;
`;

export const GiftCode = (props) => {
    const setGiftCode = (event) => {
        props.setGiftCode(event.target.value);
    };
    return (
        <Wrapper>
            <HeadingWrapper>Пожалуйста, введите подарочный код</HeadingWrapper>
            <InputWrapper value={props.giftCode} onChange={setGiftCode}/>
        </Wrapper>
    );
};