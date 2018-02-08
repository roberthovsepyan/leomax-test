import React, {Component} from 'react';
import styled from 'styled-components';



export default class DurationOption extends Component {
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
            padding: 15px; 30px;
            width: 230px;
            height: 130px;
            border-radius: 3px;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            
            &:hover {
                background: #FFE0B2;
            } 
        `;
        const TextWrapper = styled.span`
            font-size: 0.9em;
            color: ${this.props.disabled ? 'gray' : 'black'};
        `;

        const CostWrapper = styled.span`
            font-size: 0.9em;
            color: ${this.props.disabled ? '#A1887F' : 'brown'};
            margin-top: 10px;
            margin-bottom: 17px;
        `;

        const NumberWrapper = styled.span`
            font-size: 1.8em;
            margin-right: 15px;
            color: ${this.props.disabled ? 'gray' : 'black'};
        `;

        return (
            <Wrapper onClick={this.handleClick}>
                <TextWrapper>{this.props.name}</TextWrapper>
                <CostWrapper>{this.props.cost}</CostWrapper>
                <div>
                    <NumberWrapper>{this.props.monthlyCost}</NumberWrapper>
                    <TextWrapper>руб./месяц</TextWrapper>
                </div>
            </Wrapper>
        );
    }
}