import axios from "axios";


const updateProductAction = (data, product_id, image, setShow) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('product_name', data.product_name)
        formData.append('product_price', data.product_price)
        formData.append('product_stock', data.product_stock)
        formData.append('product_image', image)
        formData.append('description_product', data.description_product)
        formData.append('category_id', data.category_id)
        const products = await axios.put(`${process.env.REACT_APP_API_KEY}/products/${product_id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        alert("Update success")
        setShow(false)
        window.location.reload()
        const result = products.data.data;
        dispatch({ type: "UPDATE_PRODUCT", payload: result });
    }
    catch (err) {
        alert(err);
        setShow(false)
    }
}
export default updateProductAction;