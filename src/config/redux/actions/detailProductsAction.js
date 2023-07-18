import axios from "axios"

const detailProductAction = (id) => async (dispatch) => {
    try {
        const products = await axios.get(`${process.env.REACT_APP_API_KEY}/products/${id}`)
        const result = products.data.data;
        dispatch({ type: "GET_DETAIL_PRODUCT", payload: result });
    } 
    catch (err) {
        console.error(err.message);
    }
}

export default detailProductAction;