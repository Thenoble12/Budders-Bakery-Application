import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/cart.reducer';
import productReducer from './product/product.reducer'

const persistConfig = {
    key: 'food-shop',
    storage,
    whitelist:['cart'],
};

const appReducer = combineReducers({
    cart: cartReducer,
    product: productReducer
})

export default persistReducer(persistConfig, appReducer);