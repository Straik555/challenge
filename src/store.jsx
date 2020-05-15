import {createStore, applyMiddleware} from 'redux';
import reducer from './redusers';
import thunkMiddleware from 'redux-thunk';

const logMiddleware = (store) => (next) => (action) => {
    console.log(action.type, store.getState());
    return next(action)
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logMiddleware));


export default store;