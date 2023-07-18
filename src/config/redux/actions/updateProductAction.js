import axios from "axios";


const updateProductAction = (data, id, image, setShow) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('name', data.name)
        formData.append('price', data.price)
        formData.append('stock', data.stock)
        formData.append('image', image)
        formData.append('rating_product', data.rating_product)
        formData.append('nama_toko', data.nama_toko)
        formData.append('description_product', data.description_product)
        const products = await axios.put(`${process.env.REACT_APP_API_KEY}/products/${id}`, formData, {
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