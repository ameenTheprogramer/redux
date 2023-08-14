
import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProducts, removeselectedProducts } from '../redux/action/ProductActions'

function ProductDetails() {
  const product = useSelector((state) => state.product)
  const { productId } = useParams()
  const dispatch = useDispatch()
  console.log(product);
  const fetchproductdetails = async () => {
    const respones = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => {
      console.log(err);
    })
    dispatch(selectedProducts(respones.data))
  }
  useEffect(() => {
    if (productId && productId !== "") { fetchproductdetails() }
    return ()=>{
      dispatch(removeselectedProducts())
    }
  }, [productId])


  return (
    <div className='ui grid container'>
      {Object.keys(product).length === 0 ? (
        <div>loading.......</div>
      ) : (
      <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">and</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className='ui fluid image' src={product.image} alt="" />
              </div>
              <div className="column rp">
                <h1>{product.title}</h1>
                <h2>
                  <a href="" className="ui teal tag label">{product.price}</a>
                </h2>
                <h3 className="ui brown block header">{product.category}</h3>
                <p>{product.discription}</p>
                <div tabIndex='0' className="ui vertical animated button">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                    <div className="visible content">add to cart</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
      </div>
  )}
    </div>
  )
}

export default ProductDetails
