import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}


// // ./src/store/configureStore.js
// import {createStore, compose, applyMiddleware} from 'redux';
// // Import thunk middleware
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers';

// export default function configureStore(initialState) {
//   return createStore(rootReducer, initialState,
//     // Apply to store
//     applyMiddleware(thunk)
//   );
// }