import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/action/ProductActions';

function ProductListing() {
    const products = useSelector((state)=>state)
    const dispatch = useDispatch()
    const fetchproducts = async ()=>{
        const respones = await  axios.get('https://fakestoreapi.com/products').catch((error)=>{
            console.log(error);
        })
        dispatch(setProducts(respones.data))

    }

    useEffect(()=>{
        fetchproducts()
    },[])
    console.log(products);
  return (
    <div className='ui grid container' style={{
        position:"relative",
        top:'100px',
        display:'flex',
        alignItems:'end'
    }}>
      <ProductComponent/>
    </div>
  )
}

export default ProductListing
