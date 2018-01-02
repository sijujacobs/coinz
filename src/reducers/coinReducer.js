import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
    //console.log("Reducer : " , action.coins);
    switch (action.type){
        case actionTypes.GET_COINS:
            return Object.assign({}, state, {
                    coins: action.coins
                }
            )
        default:
            return state;
    }
}