import React, {Component} from 'react';
import styled from 'styled-components';



export default class PaymentMethod extends Component {
    handleClick = () => {
        if (this.props.handleClick) {
            this.props.handleClick(this.props.name);
        }
    };

    render () {
        let border = '0.5px dashed';
        if (this.props.disabled) {
            border = '0.5px dashed gray';
        }
        else if (this.props.active) {
            border = '0.5px solid #FFE0B2';
        }

        const Wrapper = styled.div`
            background: ${this.props.active ? '#FFE0B2' : 'white'};
            border: ${border};
            margin: 15px;
            width: 230px;
            height: 110px;
            border-radius: 3px;
            cursor: ${this.props.noHover ? 'not-allowed' : 'pointer'};
            display: flex;
            justify-content: center;
            align-items: center;
            
            &:hover {
                background: ${this.props.noHover ? 'white' : '#FFE0B2'};
            } 
        `;
        return (
            <Wrapper onClick={this.handleClick}>
                {this.props.children}
            </Wrapper>
        );
    }
}