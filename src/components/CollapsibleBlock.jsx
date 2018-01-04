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
                //console.log("percentValue ", thisExchange.percentValue)
                let statusLabel = (parseFloat(thisExchange.percentValue) > 0) ? "greenStatus" : "redStatus";
                return (
                    <div key={index} className="coinNameBlock" > 
                        <div className="coinLeftBlock"> 
                            <span></span> 
                        </div>
                        <div className="coinRightBlock"> 
                            <div className="currencyValueBlock">
                                <span className="defaultExchange">{thisExchange.name}({thisExchange.quoteAsset})</span> 
                                ${thisExchange.usdValue} 
                            </div>
                            <div className={"colorStatusBlock " + statusLabel}> 
                                <span>{thisExchange.percentValue}%</span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        let statusButton = (parseFloat(this.props.coin.maxValueExchange.percentValue) > 0) ? "greenStatus" : "redStatus";
            
        return(
            <div>
                <div className="coinNameBlock" onClick={ ()=> this.setState({ open: !this.state.open })}> 
                    <div className="coinLeftBlock"> 
                        <span>{this.props.coin.code} </span> 
                    </div>
                    <div className="coinRightBlock"> 
                        <div className="currencyValueBlock">
                            <span className="defaultExchange">{this.props.coin.maxValueExchange.name}({this.props.coin.maxValueExchange.quoteAsset})</span> 
                            ${this.props.coin.maxValueExchange.usdValue} 
                        </div>
                        <div className={"colorStatusBlock " + statusButton}> 
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