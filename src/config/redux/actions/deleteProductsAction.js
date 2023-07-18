import axios from "axios";

const deleteProductsAction = (id, setShow) => async (dispatch) => {
    try {
        const products = await axios.delete(`${process.env.REACT_APP_API_KEY}/products/${id}`)
        alert("Product Deleted")
        setShow(false)
        window.location.reload()
        const result = products.data.data;
        dispatch({ type: "DELETE_PRODUCT", payload: result });
    }
    catch (err) {
        alert(err);
        setShow(false)
    }

}

export default deleteProductsAction;