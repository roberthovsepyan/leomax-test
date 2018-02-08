import React, {Component} from 'react';
import styled from 'styled-components';

import CardsImg from '../images/sprite.payment-cards.png';
import CardsImgBW from '../images/sprite.payment-cards-bw.png';
import YandexImg from '../images/sprite.payment-yandexmoney.png';
import YandexImgBW from '../images/sprite.payment-yandexmoney-bw.png';
import PayPalImg from '../images/sprite.payment-paypal.png';
import PayPalImgBW from '../images/sprite.payment-paypal-bw.png';
import WebMoneyImg from '../images/sprite.payment-webmoney.png';
import WebMoneyImgBW from '../images/sprite.payment-webmoney-bw.png';
import QiwiImg from '../images/sprite.payment-qiwi.png';
import QiwiImgBW from '../images/sprite.payment-qiwi-bw.png';

import PaymentMethod from './PaymentMethod';
import {Checkbox} from './Checkbox';

const Wrapper = styled.div`
    padding: 4% 6%;
`;

const HeadingWrapper = styled.p`
    margin: 0 10px 30px 15px;
    font-size: 1em;
    font-weight: bold;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const TextWrapper = styled.div`
    font-size: 0.9em;
    text-align: center;
    color: ${props => props.disabled ? 'gray' : 'black'};
`;

const SmallTextWrapper = styled.div`
    font-size: 0.7em;
    text-align: center;
    color: #BDBDBD;
`;


export default class PaymentChoice extends Component {

    handleClick = (name) => {
        this.props.changePaymentMethod(name);
    };


    renderPaymentMethods () {
        const methods = [
            {name: 'cards', img: CardsImg, img_bw: CardsImgBW},
            {name: 'yandex', img: YandexImg, img_bw: YandexImgBW},
            {name: 'paypal', img: PayPalImg, img_bw: PayPalImgBW},
            {name: 'webmoney', img: WebMoneyImg, img_bw: WebMoneyImgBW},
            {name: 'sms'},
            {name: 'qiwi', img: QiwiImg, img_bw: QiwiImgBW},
            {name: 'giftcode'}
        ];
        return methods.map((method) => {
            if (method.name === 'giftcode' && this.props.giftChecked) {
                return (
                    <PaymentMethod noHover disabled key={method.name} name={method.name}>
                        <div>
                            <TextWrapper disabled>
                                Подарочный
                            </TextWrapper>
                            <TextWrapper disabled>
                                код
                            </TextWrapper>
                        </div>
                    </PaymentMethod>
                );
            }
            if (!this.props.paymentMethod) {
                if (method.name === 'sms') {
                    return (
                        <PaymentMethod key={method.name} handleClick={this.handleClick} name={method.name}>
                            <div>
                                <TextWrapper>
                                    SMS
                                </TextWrapper>
                                <SmallTextWrapper>
                                    Только для России
                                </SmallTextWrapper>
                            </div>
                        </PaymentMethod>
                    );
                }
                else if (method.name === 'giftcode' && !this.props.giftChecked) {
                    return (
                        <PaymentMethod key={method.name} handleClick={this.handleClick} name={method.name}>
                            <div>
                                <TextWrapper>
                                    Подарочный
                                </TextWrapper>
                                <TextWrapper>
                                    код
                                </TextWrapper>
                            </div>
                        </PaymentMethod>
                    );
                }
                else {
                    return (
                        <PaymentMethod key={method.name} handleClick={this.handleClick} name={method.name}>
                            <img src={method.img} width='110px' alt={method.name}/>
                        </PaymentMethod>
                    );
                }
            }

            else if (this.props.paymentMethod === method.name) {
                if (method.name === 'sms') {
                    return (
                        <PaymentMethod active key={method.name} handleClick={this.handleClick} name={method.name}>
                            <div>
                                <TextWrapper>
                                    SMS
                                </TextWrapper>
                                <SmallTextWrapper>
                                    Только для России
                                </SmallTextWrapper>
                            </div>
                        </PaymentMethod>
                    );
                }
                else if (method.name === 'giftcode' && !this.props.giftChecked) {
                    return (
                        <PaymentMethod active key={method.name} handleClick={this.handleClick} name={method.name}>
                            <div>
                                <TextWrapper>
                                    Подарочный
                                </TextWrapper>
                                <TextWrapper>
                                    код
                                </TextWrapper>
                            </div>
                        </PaymentMethod>
                    );
                }
                else {
                    return (
                        <PaymentMethod active key={method.name} handleClick={this.handleClick} name={method.name}>
                            <img src={method.img} width='110px' alt={method.name}/>
                        </PaymentMethod>
                    );
                }
            }
            else {
                if (method.name === 'sms') {
                    return (
                        <PaymentMethod disabled key={method.name} handleClick={this.handleClick} name={method.name}>
                            <div>
                                <TextWrapper disabled>
                                    SMS
                                </TextWrapper>
                                <SmallTextWrapper>
                                    Только для России
                                </SmallTextWrapper>
                            </div>
                        </PaymentMethod>
                    );
                }
                else if (method.name === 'giftcode' && !this.props.giftChecked) {
                    return (
                        <PaymentMethod disabled key={method.name} handleClick={this.handleClick} name={method.name}>
                            <div>
                                <TextWrapper disabled>
                                    Подарочный
                                </TextWrapper>
                                <TextWrapper disabled>
                                    код
                                </TextWrapper>
                            </div>
                        </PaymentMethod>
                    );
                }
                else {
                    return (
                        <PaymentMethod disabled key={method.name} handleClick={this.handleClick} name={method.name}>
                            <img src={method.img_bw} width='110px' alt={method.name}/>
                        </PaymentMethod>
                    );
                }
            }
        });
    };

    render () {
        return (
            <Wrapper>
                <HeadingWrapper>Выберите способ оплаты</HeadingWrapper>
                <ContentWrapper>
                    {this.renderPaymentMethods()}
                </ContentWrapper>
                {this.props.paymentMethod === 'giftcode' ? undefined :
                    <Checkbox checked={this.props.giftChecked} handleCheck={this.props.handleCheck}
                              label='Покупаю подписку в подарок'/>}
            </Wrapper>
        );
    }
}

