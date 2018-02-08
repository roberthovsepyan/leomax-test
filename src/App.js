import React, { Component } from 'react';
import styled from 'styled-components';

import PaymentChoice from './components/PaymentChoice';
import {Header} from './components/Header';
import {ClubName} from './components/ClubName';
import SubscriptionDuration from './components/SubscriptionDuration';
import FinalSum from './components/FinalSum';

const ContentWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
    width: 1200px;
    background: white;
    
    @media (max-width: 1200px) {
        width: 100%;
    } 
`;

class App extends Component {
    constructor () {
        super();
        this.state = {
            paymentMethod: undefined,
            giftChecked: false,
            duration: undefined,
            autoSubscribeChecked: false,
            cost: undefined,
            discountChecked: false
        };
    };

    changePaymentMethod = (name) => {
       this.setState({paymentMethod: name});
    };

    handleGiftCheck = () => {
        this.setState({giftChecked: !this.state.giftChecked});
    };

    changeDuration = (name) => {
        if (name === '2 года') {
            this.setState({duration: name, cost: '2 880'});
        }
        else if (name === '1 год') {
            this.setState({duration: name, cost: '1 500'});
        }
        else {
            this.setState({duration: name, cost: '780'});
        }
    };

    handleAutoCheck = () => {
        this.setState({autoSubscribeChecked: !this.state.autoSubscribeChecked});
    };

    handleDiscountCheck = () => {
        this.setState({discountChecked: !this.state.discountChecked});
    };

    render() {
        return (
            <div>
                <Header/>
                <ContentWrapper>
                    <ClubName/>
                    <PaymentChoice paymentMethod={this.state.paymentMethod} changePaymentMethod={this.changePaymentMethod}
                                   handleCheck={this.handleGiftCheck} giftChecked={this.state.giftChecked}/>
                    {this.state.paymentMethod && <hr color='#EEEEEE' size='5px'/>}
                    {this.state.paymentMethod &&
                    <SubscriptionDuration option={this.state.duration} changeDuration={this.changeDuration}
                                          autoChecked={this.state.autoSubscribeChecked} giftChecked={this.state.giftChecked}
                                          handleCheck={this.handleAutoCheck} paymentMethod={this.state.paymentMethod}/>}
                    {this.state.duration && <hr color='#EEEEEE' size='5px'/>}
                    {this.state.duration &&
                    <FinalSum duration={this.state.duration} autoSubscribed={this.state.autoSubscribeChecked}
                              cost={this.state.cost} handleCheck={this.handleDiscountCheck}
                              discountChecked={this.state.discountChecked}/>}
                </ContentWrapper>
            </div>
        );
    }
}

export default App;
