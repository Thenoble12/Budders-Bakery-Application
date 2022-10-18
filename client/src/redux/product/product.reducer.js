import { ProductActionTypes } from './product.actionTypes'
import { setProductItem } from './product.utils'

const INITIAL_STATE = {
    product: {},
};

const productReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProductActionTypes.PRODUCT_SET_ITEM:
            return { product: setProductItem(state.productData, action.payload) }
        default:
            return state ;
    }
}

export default productReducer;