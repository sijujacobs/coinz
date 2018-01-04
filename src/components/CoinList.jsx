import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as coinAction from '../actions/coinAction';
import SimpleLineChart from './SimpleLineChart';

import CollapsibleBlock from './CollapsibleBlock';

class CoinList extends Component{

    constructor() {
        super();
        this.state = {
            serviceTimer: null,
            open: true
        };
    }

    componentDidMount(){
        this.props.fetchCoins();
        let serviceTimer = setInterval(this.nodeServiceTicker.bind(this), 70000);
        this.setState({serviceTimer});
    }

    componentWillUnmount() {
        this.clearInterval(this.state.serviceTimer);
    }
    
    nodeServiceTicker() {
        var today = new Date();
        var currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

        console.log("nodeServiceTicker : " , currentTime);
        this.props.fetchCoins();
    }
    


    render(){
        var propsCoins = this.props;
        let coinBlocks = [];
        if(propsCoins.coins){
            coinBlocks = propsCoins.coins.map((thisCoin, index) => {
                return (
                    <CollapsibleBlock key={index} coin={thisCoin}/>
                )
            })
        }
        return(
            <div className="contentBlock">
                <div className="coinBlock">
                    <div>{coinBlocks}</div>
                </div>
                <div className="infoBlock">
                    <SimpleLineChart   />

                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        coins : state.coins.coins
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchCoins : () => dispatch(coinAction.fetchCoins())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);


