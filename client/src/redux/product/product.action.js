import { ProductActionTypes } from './product.actionTypes'

export const productSetItem = (item) => ({
    type: ProductActionTypes.PRODUCT_SET_ITEM,
    payload: item,
});
