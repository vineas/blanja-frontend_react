import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Rating = () => {
    let [products, setProduct] = useState([])
    let {id} = useParams()
  useEffect(() => {
    axios.get(`http://backend-expressjs-blanja-project.vercel.app/products/${id}`)
      .then((res) => {
        setProduct(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <>
        {products.map((product) => {
                    if (product.id && product.rating_product ==='5'){
                      return <p>⭐⭐⭐⭐⭐</p>
                    }
                    else if (product.id && product.rating_product === '4'){
                      return <p>⭐⭐⭐⭐</p>
                    }
                    else if (product.id && product.rating_product === '3'){
                      return <p>⭐⭐⭐</p>
                    }
                    else if (product.id && product.rating_product === '2'){
                      return <p>⭐⭐</p>
                    }
                    else if (product.id && product.rating_product === '1'){
                      return <p>⭐</p>
                    }
                  })}
      
    </>
  )
}

export default Rating