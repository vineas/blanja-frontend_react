import axios from "axios";

const createAddressAction = (data, setShow) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('address_as', data.address_as)
        formData.append('recipient_name', data.recipient_name)
        formData.append('recipient_phone', data.recipient_phone)
        formData.append('address_line', data.address_line)
        formData.append('postal_code', data.postal_code)
        formData.append('city_or_subdistrict', data.city_or_subdistrict)
        formData.append('customer_id', data.customer_id)
        const address = await axios.post(`${process.env.REACT_APP_API_KEY}/address`, formData);
        alert("Address created")
        setShow(false)
        window.location.reload()
        const result = address.data.data;
        dispatch({ type: "CREATE_ADDRESS", payload: result });
    }
    catch (err) {
        alert(err);
        setShow(false)
    }
}
export default createAddressAction;