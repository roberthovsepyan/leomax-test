import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 4% 6%;
`;

const ThanksMessage = styled.div`
    font-size: 1.7em;
    font-weight: bold;
    margin-bottom: 30px;
`;

export const FinalMessage = (props) => {
    const findTotalCost = () => {
        if (props.discountChecked) {
            if (props.cost === '2 880') {
                return '3 030 руб.';
            }
            else if (props.cost === '1 500') {
                return '1 650 руб.';
            }
            else {
                return '930 руб.'
            }
        }
        else {
            if (props.cost === '2 880') {
                return '2 880 руб.';
            }
            else if (props.cost === '1 500') {
                return '1 500 руб.';
            }
            else {
                return '780 руб.'
            }
        }
    };

    const renderPaymentMethod = () => {
        switch (props.paymentMethod) {
            case 'cards':
                return 'Кредитная Карта';
            case 'yandex':
                return 'Яндекс.Деньги';
            case 'paypal':
                return 'PayPal';
            case 'webmoney':
                return 'WebMoney';
            case 'sms':
                return 'СМС';
            case 'qiwi':
                return 'Qiwi кошелек';
            default:
                return '';
        }
    };

    if (props.giftCode) {
        return (
            <Wrapper>
                <ThanksMessage>
                    Спасибо за подписку!
                </ThanksMessage>
                Вы воспользовались Подарочным кодом.
                <p>Ждем Вас снова!</p>
            </Wrapper>
        );
    }

    else return (
        <Wrapper>
            <ThanksMessage>
                Спасибо за подписку!
            </ThanksMessage>
            Вы выбрали:
            <ul>
                <li>Средство оплаты: {renderPaymentMethod()}</li>
                <li>Подписка в подарок: {props.giftChecked ? 'Да' : 'Нет'}</li>
                <li>Срок подписки: {props.duration}</li>
                <li>Автопродление: {props.autoSubscribe ? 'Да' : 'Нет'}</li>
                <li>Подписка на скидку 5%: {props.discountChecked ? 'Да' : 'Нет'}</li>
                <li>Итоговая стоимость: {findTotalCost()}</li>
            </ul>
            Ждем Вас снова!
        </Wrapper>
    );
};