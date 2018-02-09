import React, {Component} from 'react';
import styled from 'styled-components';

import DurationOption from './DurationOption';
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
    margin: ${props => props.margin};
    font-size: 0.7em;
    color: gray;
    max-width: ${props => props.width};
`;

export default class SubscriptionDuration extends Component {

    componentWillReceiveProps (nextProps) {
        if ((nextProps.paymentMethod === 'webmoney' || nextProps.paymentMethod === 'giftcode' ||
            nextProps.paymentMethod === 'qiwi' || nextProps.giftChecked) && nextProps.autoChecked) {
            //remove the check from checkbox
            this.props.handleCheck();
        }
    };

    handleClick = (name) => {
        this.props.changeDuration(name);
    };


    renderCheckbox () {
        if ((this.props.paymentMethod === 'cards' || this.props.paymentMethod === 'yandex' ||
            this.props.paymentMethod === 'paypal' || this.props.paymentMethod ==='sms')
            && !this.props.giftChecked) {
            return (
                <div>
                    <Checkbox checked={this.props.autoChecked} handleCheck={this.props.handleCheck}
                              label='Продлевать подписку автоматически'/>
                    <TextWrapper width='800px' margin='0 0 0 45px'>Оплачивая подписку, я принимаю условия оплаты,
                    указанные в оферте и условия автоматического продления подписки на месяц вперед.</TextWrapper>
                </div>
            );
        }
        else {
            return undefined;
        }
    };

    renderOptions () {
        const options = [
            {name: '2 года', cost: '2880 руб.', monthlyCost: 120},
            {name: '1 год', cost: '1500 руб.', monthlyCost: 125},
            {name: '6 месяцев', cost: '780 руб.', monthlyCost: 130}
        ];

        return options.map((option) => {
           if (!this.props.option) {
               return (
                   <DurationOption name={option.name} cost={option.cost} monthlyCost={option.monthlyCost}
                                   handleClick={this.handleClick} key={option.name}/>
               );
           }
           else if (this.props.option === option.name) {
               return (
                   <DurationOption active name={option.name} cost={option.cost} monthlyCost={option.monthlyCost}
                                   handleClick={this.handleClick} key={option.name}/>
               );
           }
           else {
               return (
                   <DurationOption disabled name={option.name} cost={option.cost} monthlyCost={option.monthlyCost}
                                   handleClick={this.handleClick} key={option.name}/>
               );
           }
        });
    };

    render () {
        return (
            <Wrapper>
                <HeadingWrapper>На какой срок</HeadingWrapper>
                <ContentWrapper>
                    {this.renderOptions()}
                </ContentWrapper>
                {this.props.autoChecked && <TextWrapper width='600px' margin='15px'>В конце срока подписка продлится автоматически.
                    Вы можете выключить автопродление в любой момент в настройках или отменить его.</TextWrapper>}
                {this.renderCheckbox()}
            </Wrapper>
        );
    }
}