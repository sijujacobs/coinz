import * as actionTypes from './actionTypes';

import {data} from '../data/coins';
import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/users';
//const baseUrl = 'https://jsonplaceholder.typicode.com/photos'
//const baseUrl = 'https://www.cryptocompare.com/api/data/coinlist/';

export const fetchCoinsSuccess = (coins) => {
  //console.log("fetchCoinsSuccess : ", coins);
    return {
      type: actionTypes.GET_COINS,
      coins
    }
  };


export const fetchCoins = () => {
    return (dispatch) => {
      return axios.get(baseUrl)
        .then(response => {
            //dispatch(fetchCoinsSuccess(response.data))data.questionData
            
            dispatch(fetchCoinsSuccess(data.coinData))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

