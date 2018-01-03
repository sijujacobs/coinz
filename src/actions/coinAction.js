import * as actionTypes from './actionTypes';

import {data} from '../data/coins';
import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/users';
//const baseUrl = 'https://jsonplaceholder.typicode.com/photos'
//const baseUrl = 'https://www.cryptocompare.com/api/data/coinlist/';

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
		console.log("Data From Server : ", rawData);
		var coinData = [];
		for( var indCoin in rawData ) {
			var thisRawObj = rawData[indCoin];
			//console.log("thisRawObj : ", thisRawObj);
			const maxValueExchange = thisRawObj.exchanges.reduce(function(prev, current) {
				return (prev.usdValue > current.usdValue) ? prev : current
			}) 
			var coinObject = {
				code : thisRawObj.code,
				maxValueExchange : maxValueExchange,
				exchanges : thisRawObj.exchanges
			}
			
			coinData.push(coinObject);
		}
		return coinData;
	}

