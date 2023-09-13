import React, { useEffect, useState } from 'react'
import ModalCreate from '../components/ModalCreate'
import ModalUpdate from '../components/ModalUpdate'
import ModalDelete from '../components/ModalDelete'
import { Form, Link } from 'react-router-dom'
import NavLogin from './NavLogin'
import { useDispatch, useSelector } from 'react-redux'
import getProductAction from '../config/redux/actions/getProductAction'
import Foot from './Foot'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css";
import { InputText } from 'primereact/inputtext';
import axios from 'axios'

// import { InputGroup } from 'react-bootstrap'
const profileImage = require('../img/profileFoto.png')

const ProfileSeller = ({ seller_id, seller_storename, seller_email, seller_phone, seller_description, seller_image }) => {
    // const { product } = useSelector((state) => state.product)
    const [product, setProduct] = useState([]);
    const [seller, setSeller] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = product.slice(firstIndex, lastIndex);
    const npage = Math.ceil(product.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
    const [search, setSearch] = useState('')
    // console.log(search);
    const dispatch = useDispatch()
    const [data, setData] = useState({
        seller_storename:"",
        seller_email:"",
        seller_phone:"",
        seller_description:"",
        seller_image
    });

    const [image, setImage] = useState(null);
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpload = (e) => {
        setImage(e.target.files[0]);
    };

    const user_seller = localStorage.getItem("seller_id");
    const handleSubmit = (e) => {
        e.preventDefault();
        // ${process.env.REACT_APP_API_KEY}
        const formData = new FormData();
        formData.append("seller_storename", data.seller_storename);
        formData.append("seller_email", data.seller_email);
        formData.append("seller_phone", data.seller_phone);
        formData.append("seller_description", data.seller_description);
        formData.append("seller_image", image);
        axios
            .put(
                `${process.env.REACT_APP_API_KEY}/seller/profile/${user_seller}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then(() => {
                alert("Profile Updated");
                window.location.reload();
            })
            .catch((err) => {
                alert(err);
            });
    };



    // useEffect(() => {
    //     dispatch(getProductAction())
    // }, [])


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}/products/profile/${user_seller}`)
            .then((response) => {
                setProduct(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}/seller/profile/${user_seller}`)
            .then((response) => {
                setSeller(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    }, [])

    return (
        <>
            <NavLogin />
            <div style={{ marginTop: 60 }}>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div
                        className="col-md-3"
                        style={{ width: "100vw", backgroundColor: "white", marginTop: 30 }}>
                        <div className="col-md-12">
                            <div className="col-md-10">
                                {seller.map((sellerItem) => (
                                    <div className="col-md-12" style={{ display: "flex" }}>
                                        <img
                                            src={profileImage}
                                            style={{ width: 80, height: 80 }}
                                            alt="description of image"
                                        />
                                        <div className="col-md-12">
                                            <h5 className="card-title">{sellerItem.seller_name}</h5>
                                            {/* <Link href="#"> */}
                                            <p>{sellerItem.seller_storename}</p>
                                            {/* </Link> */}
                                        </div>
                                    </div>
                                ))}
                                <div style={{ marginTop: 78 }}>
                                    {/* <div style="display: flex;">
                            <div style="width: 32px; height: 32px; background-color: #456BF3; border-radius: 50px;">
                            </div>
                            <a href="" style="display: flex; align-items: center; margin-left: 10px;">My Account</a>
                            </div>
                            <div style="display: flex; margin-top: 20px;">
                            <div style="width: 32px; height: 32px; background-color: #F36F45; border-radius: 50px;">
                            </div>
                            <a href="" style="display: flex; align-items: center; margin-left: 10px;">Shipping Address</a>
                            </div>
                            <div style="display: flex; margin-top: 20px;">
                            <div style="width: 32px; height: 32px; background-color: #F3456F; border-radius: 50px;">
                            </div>
                            <a href="" style="display: flex; align-items: center; margin-left: 10px;">My Order</a>
                            </div> */}
                                    <div
                                        className="nav flex-column"
                                        id="v-pills-tab"
                                        role="tablist"
                                        aria-orientation="vertical"
                                    >
                                        <Link
                                            className="nav-link active"
                                            id="v-pills-home-tab"
                                            data-toggle="pill"
                                            data-target="#v-pills-home"
                                            type="button"
                                            role="tab"
                                            aria-controls="v-pills-home"
                                            aria-selected="true"
                                            style={{ color: 'grey' }}
                                        >
                                            Store
                                        </Link>
                                        <Link
                                            className="nav-link"
                                            id="v-pills-profile-tab"
                                            data-toggle="pill"
                                            data-target="#v-pills-profile"
                                            type="button"
                                            role="tab"
                                            aria-controls="v-pills-profile"
                                            aria-selected="false"
                                            style={{ color: 'grey' }}
                                        >
                                            Product
                                        </Link>
                                        <Link
                                            className="nav-link"
                                            id="v-pills-messages-tab"
                                            data-toggle="pill"
                                            data-target="#v-pills-messages"
                                            type="button"
                                            role="tab"
                                            aria-controls="v-pills-messages"
                                            aria-selected="false"
                                            style={{ color: 'grey' }}
                                        >
                                            My Order
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-md-8"
                        style={{ height: "100vh", backgroundColor: "#F5F5F5" }}
                    >
                        <div
                            className="col-md-11"
                            style={{ backgroundColor: "white", marginTop: 26, borderRadius: 5 }}
                        >
                            <div className="tab-content" id="v-pills-tabContent">
                                {/* My Profile */}
                                <div
                                    className="tab-pane fade show active"
                                    id="v-pills-home"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-home-tab"
                                    style={{ paddingBottom: 30, paddingTop: 30, paddingLeft: 30 }}
                                >
                                    <h5>My profile store</h5>
                                    <p>Manage your profile inoformation</p>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-7">
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group row">
                                                    <label
                                                        htmlFor="inputName"
                                                        className="col-sm-2 col-form-label"
                                                    >
                                                        Store name
                                                    </label>
                                                    <div className="col-sm-10">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="storeName"
                                                            placeholder="Store name"
                                                            style={{ marginLeft: 50 }}
                                                            name="seller_storename"
                                                            value={data.seller_storename}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label
                                                        htmlFor="inputEmail"
                                                        className="col-sm-2 col-form-label"
                                                    >
                                                        Email
                                                    </label>
                                                    <div className="col-sm-10">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="inputPassword"
                                                            placeholder="Email"
                                                            style={{ marginLeft: 50 }}
                                                            name="seller_email"
                                                            value={data.seller_email}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label
                                                        htmlFor="inputPassword"
                                                        className="col-sm-2 col-form-label"
                                                    >
                                                        Phone Number
                                                    </label>
                                                    <div className="col-sm-10">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            // id="inputPassword"
                                                            placeholder="Phone number"
                                                            style={{ marginLeft: 50 }}
                                                            name="seller_phone"
                                                            value={data.seller_phone}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label
                                                        htmlFor="inputPassword"
                                                        className="col-sm-2 col-form-label"
                                                    >
                                                        Description
                                                    </label>
                                                    <div className="col-sm-10">
                                                        <textarea
                                                            className="form-control"
                                                            id="exampleFormControlTextarea1"
                                                            style={{ marginLeft: 50 }}
                                                            rows={3}
                                                            name="seller_description"
                                                            value={data.seller_description}
                                                            onChange={handleChange}

                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="btn btn-danger"
                                                    style={{
                                                        marginTop: 20,
                                                        borderRadius: 25,
                                                        marginLeft: 64,
                                                        width: 100
                                                    }}
                                                >
                                                    Save
                                                </button>
                                            </form>
                                        </div>
                                        <div
                                            className="col-md-3"
                                            style={{ justifyContent: "center", marginLeft: 50 }}
                                        >
                                            <img
                                                src={profileImage}
                                                alt=""
                                                style={{ marginLeft: 64 }}
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                style={{ marginTop: 20, borderRadius: 25, marginLeft: 64 }}
                                            >
                                                Select image
                                            </button>
                                            {/* <input
                                                type="file"
                                                name="seller_image"
                                                value={data.seller_image}
                                                onChange={handleUpload}

                                            /> */}
                                        </div>
                                    </div>
                                </div>
                                {/* product */}
                                <div
                                    className="tab-pane fade"
                                    id="v-pills-profile"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-profile-tab"
                                    style={{ paddingTop: 30, paddingLeft: 30, paddingBottom: 30 }}
                                >
                                    <div className="btn-payment">
                                        <ModalCreate />
                                        {/* <button
                                            className="btn-choose-address"
                                            data-toggle="modal"
                                            data-target="#exampleModal"
                                            style={{
                                                color: "white",
                                                width: 190,
                                                height: 36,
                                                borderRadius: 24,
                                                border: 1,
                                                backgroundColor: "#DB3022",
                                                marginTop: 25
                                            }}
                                        >
                                            Add new product
                                        </button> */}
                                    </div>

                                    <form className="form-inline" style={{ marginTop: 20 }}>
                                        <input
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="form-control mr-sm-2"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                            style={{ borderRadius: 94 }}
                                        />
                                        {/* <button
                                            className="btn btn-outline-success-danger my-2 my-sm-0"
                                            type="submit"
                                            style={{ borderRadius: 94 }}
                                        >
                                            Search
                                        </button> */}
                                    </form>
                                    {/* <Form>
                                        <InputGroup className='my-3'>
                                            <Form.Control 
                                            onChange={(e) => setSearch(e.target.value)} 
                                            placeholder='Search product'  
                                            />
                                        </InputGroup>
                                    </Form> */}
                                    <hr />
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                {/* <th scope="col">#</th> */}
                                                <th scope="col">Name</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Stock</th>
                                                {/* <th scope="col">Category</th> */}
                                                <th scope="col">Image</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {records.filter((product) => {
                                                return search.toLowerCase() === '' ? product : product.product_name.toLowerCase().includes(search)
                                            }).map((product, index) => (
                                                <tr key={index}>
                                                    {/* <th>{product.product_id}</th> */}
                                                    <td>{product.product_name}</td>
                                                    <td>IDR {product && product.product_price ? product.product_price.toLocaleString() : 'N/A'}</td>
                                                    <td>{product.product_stock}</td>
                                                    {/* <td>{product.category_name}</td> */}
                                                    <td><img src={product.product_image} crossOrigin="anonymous" style={{ width: 100, padding: 10 }} /></td>
                                                    <td>
                                                        <Link to={`/product/${product.product_id}`}>
                                                            <button className="btn btn-primary" style={{ margin: "5px" }}>Detail</button>
                                                        </Link>
                                                        <ModalUpdate product_id={product.product_id} product_name={product.product_name} product_price={product.product_price} product_stock={product.product_stock}
                                                            description_product={product.description_product} category_id={product.category_id}>Update</ModalUpdate>
                                                        <ModalDelete product_id={product.product_id} style={{ margin: "10px" }}>Delete</ModalDelete>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    {/* <div className="card"> */}
                                    {/* <DataTable value={product} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '20rem' }}>
                                        <Column field="id" header="No" sortable style={{ width: '15%' }}></Column>
                                        <Column field="name" header="Name" sortable style={{ width: '15%' }}></Column>
                                        <Column field="price" header="Price" sortable style={{ width: '15%' }}></Column>
                                        <Column field="stock" header="Stock" sortable style={{ width: '15%' }}></Column>
                                        <Column field="image" header="Image" style={{ width: '45%' }} src={product.image} crossOrigin="anonymous" ></Column>
                                        <Column field="rating_product" header="Rating" sortable style={{ width: '15%' }}></Column>
                                        <Column field="nama_toko" header="Store" sortable style={{ width: '15%' }}></Column>
                                        <Column field="description_product" header="Description" style={{ width: '15%' }}></Column>
                                        <Column field='bu' header="Action" style={{ width: '15%' }}>
                                        </Column>
                                    </DataTable> */}
                                    {/* </div> */}

                                    <nav>
                                        <ul className='pagination'>
                                            <li className='page-item'>
                                                <a href="#" className='page-link'
                                                    onClick={prePage}>Prev</a>
                                            </li>
                                            {
                                                numbers.map((n, i) => (
                                                    <li className={`page-item${currentPage === n ? 'active' : ''}`} key={i}>
                                                        <a href="#" className='page-link'
                                                            onClick={() => changePage(n)} >{n}</a>
                                                    </li>
                                                ))
                                            }
                                            <li className='page-item'>
                                                <a href="#" className='page-link'
                                                    onClick={nextPage}>Next</a>
                                            </li>
                                        </ul>
                                    </nav>

                                </div>
                                {/* Order  */}
                                <div
                                    className="tab-pane fade"
                                    id="v-pills-messages"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-messages-tab"
                                >
                                    <div
                                        className="tab-pane fade show active"
                                        id="v-pills-home"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-home-tab"
                                        style={{ paddingBottom: 30, paddingTop: 30, paddingLeft: 30 }}
                                    >
                                        <h4>My Order</h4>
                                        <nav>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                <a
                                                    className="nav-item nav-link active"
                                                    id="nav-home-tab"
                                                    data-toggle="tab"
                                                    href="#nav-home"
                                                    role="tab"
                                                    aria-controls="nav-home"
                                                    aria-selected="true"
                                                >
                                                    All items
                                                </a>
                                                <a
                                                    className="nav-item nav-link"
                                                    id="nav-profile-tab"
                                                    data-toggle="tab"
                                                    href="#nav-profile"
                                                    role="tab"
                                                    aria-controls="nav-profile"
                                                    aria-selected="false"
                                                >
                                                    Not yet paid
                                                </a>
                                                <a
                                                    className="nav-item nav-link"
                                                    id="nav-contact-tab"
                                                    data-toggle="tab"
                                                    href="#nav-contact"
                                                    role="tab"
                                                    aria-controls="nav-contact"
                                                    aria-selected="false"
                                                >
                                                    Packed
                                                </a>
                                                <a
                                                    className="nav-item nav-link"
                                                    id="nav-home-tab"
                                                    data-toggle="tab"
                                                    href="#nav-home"
                                                    role="tab"
                                                    aria-controls="nav-home"
                                                    aria-selected="true"
                                                >
                                                    Sent
                                                </a>
                                                <a
                                                    className="nav-item nav-link"
                                                    id="nav-profile-tab"
                                                    data-toggle="tab"
                                                    href="#nav-profile"
                                                    role="tab"
                                                    aria-controls="nav-profile"
                                                    aria-selected="false"
                                                >
                                                    Completed
                                                </a>
                                                <a
                                                    className="nav-item nav-link"
                                                    id="nav-contact-tab"
                                                    data-toggle="tab"
                                                    href="#nav-contact"
                                                    role="tab"
                                                    aria-controls="nav-contact"
                                                    aria-selected="false"
                                                >
                                                    Order Cancel
                                                </a>
                                            </div>
                                        </nav>
                                        <div className="tab-content" id="nav-tabContent">
                                            <div
                                                className="tab-pane fade show active"
                                                id="nav-home"
                                                role="tabpanel"
                                                aria-labelledby="nav-home-tab"
                                            >
                                                Not result
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="nav-profile"
                                                role="tabpanel"
                                                aria-labelledby="nav-profile-tab"
                                            >
                                                Not result
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="nav-contact"
                                                role="tabpanel"
                                                aria-labelledby="nav-contact-tab"
                                            >
                                                Not result
                                            </div>

                                            <div
                                                className="tab-pane fade"
                                                id="nav-profile"
                                                role="tabpanel"
                                                aria-labelledby="nav-profile-tab"
                                            >
                                                Not result
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="nav-contact"
                                                role="tabpanel"
                                                aria-labelledby="nav-contact-tab"
                                            >
                                                Not result
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changePage(id) {
        setCurrentPage(id)
    }


    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }

    }
}

export default ProfileSeller;