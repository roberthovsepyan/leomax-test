import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 2% 13%;
    font-size: 0.7em;
    color: gray;
`;

export const Footer = () => {
    return (
        <Wrapper>
            © 2010-2018 Домашний Магазин
        </Wrapper>
    );
};