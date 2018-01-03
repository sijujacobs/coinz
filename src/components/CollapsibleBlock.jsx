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
                        <div className="exchangeBlock"> {thisExchange.name}({thisExchange.quoteAsset})</div>
                        <div className="exchangeBlock"> ${thisExchange.usdValue}</div>
                        <div className="exchangeBlock"> {thisExchange.percentValue}%</div>
                    </div>
                )
            })
        }
        console.log("percentValue ", this.props.coin.maxValueExchange.percentValue)
        let statusButton = (parseFloat(this.props.coin.maxValueExchange.percentValue) > 0) ? "greenStatus" : "redStatus";
            
        return(
            <div>
                <div className="coinNameBlock" onClick={ ()=> this.setState({ open: !this.state.open })}> 
                    <div className="coinLeftBlock"> 
                        <span>{this.props.coin.name}({this.props.coin.code}) :</span> 
                    </div>
                    <div className="coinRightBlock"> 
                        <div className="currencyValueBlock">
                            <span className="defaultExchange">{this.props.coin.maxValueExchange.name}({this.props.coin.maxValueExchange.quoteAsset})</span> 
                            ${this.props.coin.maxValueExchange.usdValue} 
                        </div>
                        <div className={statusButton}> 
                            <span>{this.props.coin.maxValueExchange.percentValue}%</span>
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