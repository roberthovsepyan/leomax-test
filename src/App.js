import React, { Component } from 'react';
import styled from 'styled-components';

import PaymentChoice from './components/PaymentChoice';
import {Header} from './components/Header';
import {ClubName} from './components/ClubName';
import SubscriptionDuration from './components/SubscriptionDuration';
import FinalSum from './components/FinalSum';
import Paying from './components/Paying';
import {Footer} from './components/Footer';
import {FinalMessage} from './components/FinalMessage';
import {GiftCode} from './components/GiftCode';

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
            discountChecked: false,
            paid: false,
            giftCode: '',
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

    handlePay = () => {
        this.setState({paid: true});
    };

    handleGiftCode = () => {
        if (this.state.paymentMethod !== 'giftcode' && this.state.giftCode) {
            this.setState({giftCode: ''});
        }
        else if (this.state.paymentMethod === 'giftcode' && this.state.duration) {
            this.setState({duration: undefined});
        }
    };

    setGiftCode = (code) => {
        this.setState({giftCode: code});
    };

    renderContent () {
        if (this.state.paymentMethod && this.state.paymentMethod !== 'giftcode') {
            return (
            <SubscriptionDuration option={this.state.duration} changeDuration={this.changeDuration}
                                  autoChecked={this.state.autoSubscribeChecked}
                                  giftChecked={this.state.giftChecked}
                                  handleCheck={this.handleAutoCheck}
                                  paymentMethod={this.state.paymentMethod}/>
            );
        }
        else if (this.state.paymentMethod === 'giftcode') {
            return (
                <GiftCode giftCode={this.state.giftCode} setGiftCode={this.setGiftCode}/>
            );
        }
        else {return undefined;}
    };

    render() {
        return (
            <div>
                <Header/>
                {this.state.paid ?
                    <ContentWrapper>
                        <FinalMessage paymentMethod={this.state.paymentMethod} giftChecked={this.state.giftChecked}
                                      duration={this.state.duration} autoSubscribed={this.state.autoSubscribeChecked}
                                      cost={this.state.cost} discountChecked={this.state.discountChecked}
                                      giftCode={this.state.giftCode}/>
                    </ContentWrapper>
                    :
                    <ContentWrapper>
                        <ClubName/>
                        <PaymentChoice paymentMethod={this.state.paymentMethod}
                                       changePaymentMethod={this.changePaymentMethod}
                                       handleCheck={this.handleGiftCheck} giftChecked={this.state.giftChecked}
                                       handleGiftCode={this.handleGiftCode}/>
                        {this.state.paymentMethod && <hr color='#EEEEEE' size='5px'/>}
                        {this.renderContent()}
                        {(this.state.duration && this.state.paymentMethod !== 'giftcode') &&
                        <div>
                        <hr color='#EEEEEE' size='5px'/>
                        <FinalSum duration={this.state.duration} autoSubscribed={this.state.autoSubscribeChecked}
                                  cost={this.state.cost} handleCheck={this.handleDiscountCheck}
                                  discountChecked={this.state.discountChecked}/>
                        </div>}
                        <Paying giftCode={this.state.giftCode} duration={this.state.duration} handlePay={this.handlePay}/>
                    </ContentWrapper>
                }
                <hr color='#E0E0E0' size='5px'/>
                <Footer/>
            </div>
        );
    }
}

export default App;
