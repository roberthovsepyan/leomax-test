import React, {Component} from 'react';
import styled from 'styled-components';

import NoComissionImg from '../images/sprite.nocomission-silver.png';
import LockImg from '../images/sprite.lock-silver.png';
import RibbingImg from '../images/ribbing-pattern.png';

const Wrapper = styled.div`
    padding: 4% 6%;
    background: #EEEEEE;
`;

const BlockWrapper = styled.div`
    display: inline-flex;
    justify-content: space-between;
    margin: 15px;
    font-size: 0.7em;
    color: gray;
    width: 340px;
`;

const TextWrapper = styled.div`
    display: inline-block;
    width: 300px;
`;

const DisabledButtonWrapper = styled.div`
    margin: 15px 15px 25px 15px;
    width: 200px;
    height: 60px;
    background: white;
    border-radius: 30px;
    border: 1px solid #BDBDBD;
    color: #BDBDBD;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: not-allowed;
`;


export default class Paying extends Component {
    constructor () {
        super();
        this.state = {
            clicking: false,
        }
    };

    handleMouseDown = () => {
        this.setState({clicking: true});
    };

    handleMouseUp = () => {
        this.setState({clicking: false});
        setTimeout(() => this.props.handlePay(), 500);
    };

    handleMouseOut = () => {
        this.setState({clicking: false});
    };

    render () {
        const ButtonWrapper = styled.div`
            margin: 15px 15px 25px 15px;
            width: 200px;
            height: 60px;
            background: url(${RibbingImg}) #FFCA28;
            border-radius: 30px;
            box-shadow: ${this.state.clicking ? 'inset 0px 1px 5px 0px rgba(0,0,0,0.58)' : '0px 1px 5px 0px rgba(0,0,0,0.58)'};
            color: #424242;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        `;

        return (
            <Wrapper>
                {(this.props.duration || this.props.giftCode) ?
                    <ButtonWrapper onMouseOut={this.handleMouseOut} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>
                        Оплатить
                    </ButtonWrapper> :
                    <DisabledButtonWrapper>
                        Оплатить
                    </DisabledButtonWrapper>
                }
                <BlockWrapper>
                    <img src={NoComissionImg} alt='no-commission' width='35px' height='35px'/>
                    <TextWrapper>Нет комиссии при оплате банковскими картами Яндекс.Деньгами и Qiwi</TextWrapper>
                </BlockWrapper>
                <BlockWrapper>
                    <img src={LockImg} alt='lock' width='30px' height='30px'/>
                    <TextWrapper>Все платежи надежно защищены и соответствуют международным стандартам</TextWrapper>
                </BlockWrapper>
            </Wrapper>
        );
    }
}