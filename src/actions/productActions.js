import axios from 'axios'
import {ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE} from '../constants/productConstants'

export const createProductAction = (productData) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_PRODUCT_REQUEST
        })
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
        } 
        const {data} = await axios.post('https://vybes.azurewebsites.net/api/Products/CreateProduct', {
            categoryId: productData.categoryId,
            vendorId: "271D7F9A-8A6E-4812-BEAC-54CEF521C415",
            name: productData.title,
            description: productData.description,
            rentPerDuration: productData.rentPerDuration,
            durationType: 1,
            productPrice: 0,
            depositeAmount: productData.depositeAmount,
            tags: productData.tags,
            image1Url: productData.imgUrl1,
            image2Url: productData.imgUrl2,
            image3Url: productData.imgUrl3
        }, config)
        dispatch({
            type: ADD_PRODUCT_SUCCESS,
            payload: data
        })
    } catch(error) {
        console.log(error)
        dispatch({
            type: ADD_PRODUCT_FAILURE,
            payload: error.response.data.message
        })
    }
}