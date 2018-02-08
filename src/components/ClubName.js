import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center;
    font-size: 0.7em;
    background: #EEEEEE;
    padding: 10px;
`;

export const ClubName = () => {
    return (
        <Wrapper>
            Клуб выгодных покупок
        </Wrapper>
    );
};