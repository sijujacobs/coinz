import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as coinAction from '../actions/coinAction';
import SimpleLineChart from './SimpleLineChart';

import CollapsibleBlock from './CollapsibleBlock';

class CoinList extends Component{

    constructor() {
        super();
        this.state = {
            open: true
        };

        
      }

    componentDidMount(){
        this.props.fetchCoins();
    }

    

    // shouldComponentUpdate(nextProps, nextState) {
    //     //console.log("Should Update thisProps :: " , this.props);
    //     //console.log("Should Update :: " , nextProps);
        
    //     return (this.props.coins.length !== nextProps.coins.coins.length)
    // }

    onCoinClick(selectedCoin){
        console.log("Selected Coin : ", selectedCoin);
    }

    createChartData(){
		// This function creates data that doesn't look entirely random
		const data = []
		for (let x = 0; x <= 10; x++) {
            const random = Math.random();
            const temp = data.length > 0 ? data[data.length-1].y : 50;
            const y = random >= .45 ? temp + Math.floor(random * 20) : temp - Math.floor(random * 20);
            data.push({x,y})
          }
          return data;
        // this.setState({
        //     chartData : data
        // })
        
    }

    render(){
        //   <LineChart data={this.createChartData()} color={'#F44336'}   /> 

        var propsCoins = this.props;
        console.log("propsCoins : ", propsCoins);
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
    console.log("MapStateToProps : ", state);
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


