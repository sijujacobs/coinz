import * as actionTypes from './actionTypes';

import {data} from '../data/coins';
import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/users';

	export const fetchCoinsSuccess = (coins) => {
		return {
			type: actionTypes.GET_COINS,
			coins
		}
	};

	export const fetchCoins = () => {
		return (dispatch) => {
			return axios.get(baseUrl)
				.then(response => {
					dispatch(fetchCoinsSuccess( dataFormatter(data) ));
				})
				.catch(error => {
					throw(error);
				});
		};
	};


	const dataFormatter = (rawData) => {
		//console.log("Data From Server : ", rawData);
		var coinData = [];
		for( var indCoin in rawData ) {
			let thisRawObj = rawData[indCoin];
			let maxValueExchange = thisRawObj.exchanges.reduce(function(prev, current) {
				return (prev.usdValue > current.usdValue) ? prev : current
			}) 
			let filteredExchanges = thisRawObj.exchanges.filter((thisExchange) => { 
				if (thisExchange.quoteAsset !== maxValueExchange.quoteAsset ) {
					return thisExchange
				}
				return false;
			} );

			var coinObject = {
				code : thisRawObj.code,
				maxValueExchange : maxValueExchange,
				exchanges : filteredExchanges
			}
			
			coinData.push(coinObject);
		}
		return coinData;
	}

