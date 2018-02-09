import React, {Component} from 'react';
import styled from 'styled-components';

import {Checkbox} from './Checkbox';

const Wrapper = styled.div`
    padding: 4% 6%;
`;

const HeadingWrapper = styled.p`
    margin: 0 10px 30px 15px;
    font-size: 1em;
    font-weight: bold;
`;

const TextWrapper = styled.div`
    margin: ${props => props.margin};
    font-size: 0.7em;
    color: gray;
    max-width: 600px;
`;

const NumberWrapper = styled.span`
    margin-left: 15px;
    font-size: 2.5em;
    font-weight: bold;
    color: ${props => props.color};
`;

const RubWrapper = styled.span`
    font-size: 1em;
    font-weight: bold;
    margin-left: 20px;
`;

export default class FinalSum extends Component {
    renderSum () {
        if (this.props.discountChecked) {
            let totalCost;
            if (this.props.cost === '2 880') {totalCost = '3 030'}
            else if (this.props.cost === '1 500') {totalCost = '1 650'}
            else if (this.props.cost === '780') {totalCost = '930'}
            return (
                <span>
                    <NumberWrapper color='#BDBDBD'>{this.props.cost} + 150</NumberWrapper>
                    <NumberWrapper>{` =  ${totalCost}`}</NumberWrapper>
                </span>
            );
        }
        else {
            return <NumberWrapper>{this.props.cost}</NumberWrapper>
        }
    };

    render () {
        return (
            <Wrapper>
                <HeadingWrapper>{`Итого к оплате (за ${this.props.duration})`}</HeadingWrapper>
                {this.renderSum()}
                <RubWrapper>руб.</RubWrapper>
                {this.props.autoSubscribed &&
                <TextWrapper margin='15px'>Далее 120 руб. в месяц</TextWrapper>}
                <br/>
                <Checkbox checked={this.props.discountChecked} handleCheck={this.props.handleCheck}
                          label='Добавить подписку на скидку 5% на весь ассортимент товаров'/>
                <TextWrapper margin='0 0 0 45px'>Срок действия подписки 6 месяцев. Стоимость подписки 150 руб.</TextWrapper>
            </Wrapper>
        );
    }
}