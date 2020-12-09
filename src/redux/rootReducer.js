import { combineReducers } from 'redux';
import historiaReducer from './historia/historia.reducer';
import productsReducer from './products/products.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer,
    productsData: productsReducer,
    historia: historiaReducer,
});