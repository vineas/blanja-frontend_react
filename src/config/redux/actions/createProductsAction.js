import axios from "axios";

const createProductAction = (data, product_image, setShow) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('product_name', data.product_name)
        formData.append('product_price', data.product_price)
        formData.append('product_stock', data.product_stock)
        formData.append('product_image', product_image)
        formData.append('description_product', data.description_product)
        formData.append('category_id', data.category_id)
        formData.append('seller_id', data.seller_id)
        const products = await axios.post(`${process.env.REACT_APP_API_KEY}/products`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        alert("Product created")
        setShow(false)
        window.location.reload()
        const result = products.data.data;
        dispatch({ type: "CREATE_PRODUCT", payload: result });
    }
    catch (err) {
        alert(err);
        setShow(false)
    }
}
export default createProductAction;