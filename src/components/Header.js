import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center;
    margin: 10px
`;

const CompanyNameWrapper = styled.div`
    color: red;
    font-weight: bold;
`;

const SubscriptionTextWrapper = styled.p`
    font-size: 1.8em;
    margin: 5px;
`;

const UnderlyingTextWrapper = styled.p`
    font-size: 0.7em;
    font-weight: 100;
    margin: 5px;
    color: gray;
`;

export const Header = () => {
    return (
        <Wrapper>
            <CompanyNameWrapper>Домашний Магазин</CompanyNameWrapper>
            <SubscriptionTextWrapper>Оформление подписки</SubscriptionTextWrapper>
            <UnderlyingTextWrapper>Спасибо, что решили стать участником клуба</UnderlyingTextWrapper>
        </Wrapper>
    );
};