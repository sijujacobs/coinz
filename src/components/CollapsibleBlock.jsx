import React, {Component} from 'react';
import { Collapse, Well } from 'react-bootstrap';
// var Button = ReactBootstrap.Button;
// // var Panel = ReactBootstrap.Panel;
// // var Fade = ReactBootstrap.Fade;
// var Collapse = ReactBootstrap.Collapse;
// var Well = ReactBootstrap.Well;


export default class CollapsibleBlock extends Component{
    constructor() {
        super();
        this.state = {open: false};
      }

    componentDidMount(){
    }
    render(){

        let exchangeBlocks = [];
        if(this.props.coin.exchanges){
            exchangeBlocks = this.props.coin.exchanges.map((thisExchange, index) => {
                return (
                    <div className="exchangeContainer" key={index}>
                        <div className="exchangeBlock"> {thisExchange.name}</div>
                        <div className="exchangeBlock"> ${thisExchange.usdValue}</div>
                        <div className="exchangeBlock"> {thisExchange.statusValue}%</div>
                    </div>
                )
            })
        }
        return(
            <div>
                <div className="coinNameBlock" onClick={ ()=> this.setState({ open: !this.state.open })}> 
                    <div className="coinLeftBlock"> 
                        <span>{this.props.coin.name}({this.props.coin.code}) :</span> 
                    </div>
                    <div className="coinRightBlock"> 
                        <div className="currencyValueBlock">
                        <span className="defaultExchange">{this.props.coin.defaultExchange}</span> ${this.props.coin.usdValue} </div>
                        <div className="colorStatusBlock"> 
                            <span>{this.props.coin.statusValue}%</span>
                        </div>
                    </div>
                </div>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            <div className="wellContainer">
                            {exchangeBlocks}
                            </div>
                        </Well>
                    </div>
                </Collapse>
            </div>
        )
    }
}