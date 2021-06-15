import React, { useContext } from 'react'

import { connect } from 'react-redux'
import ProductContext from '../../context/ProductContext'
import './productList.scss'

function ProductList(props) {
  const { productItem } = useContext(ProductContext)

  return (
    productItem && (
      <section className="product-list-main">
        {productItem.map((product) => (
          <ol key={product.id}>
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />
            <li className="product-title">{product.name}</li>
            <li className="product-price">{product.price}€</li>
            <button
              onClick={() => props.addToCart(product)}
              className="btn-AddtoCart"
            >
              Add To Cart
            </button>
          </ol>
        ))}
      </section>
    )
  )
}

export default connect((state) => ({ product: state }), {
  addToCart(product) {
    return {
      type: 'ADD_TO_CART',
      product
    }
  }
})(ProductList)
