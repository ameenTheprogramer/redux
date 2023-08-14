import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function ProductComponent() {
    const products = useSelector((state) => state.allproducts.products)


    return (
        <Renderlist />
    )
}

export default ProductComponent


function Renderlist() {
    const products = useSelector((state) => state.allproducts.products)
    // const {id, title, category, price,  image} = products



    return (
        products.map((products)=>(
        <div className='four colum wide' style={{
            marginTop:'50px'
        }} key={products.id}>
            <Link to={`/product/${products.id}`}>

            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={products.image} alt="" />
                    </div>
                    <div className="content">
                        <div className="header">{products.title}</div>
                        <div className="meta price">${products.price}</div>
                        <div className="meta">{products.category}</div>
                    </div>
                </div>
            </div>
            </Link>
        </div>))
    )
}
