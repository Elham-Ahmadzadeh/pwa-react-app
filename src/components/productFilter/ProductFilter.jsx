import './productFilter.scss'
import ProductList from '../productList/ProductList'
import React, { useContext, useState } from 'react'
import ProductContext from '../../context/ProductContext'

function ProductFilter() {
  const { productItem, setProductItem, getProducts } =
    useContext(ProductContext)
  const [selectedItems, setSelectedItems] = useState('new')

  function filterItems(word) {
    switch (word) {
      case 'new':
        setProductItem(productItem.filter((p) => p.isNew === true))
        setSelectedItems('new')
        break
      case 'women':
        setProductItem(productItem.filter((p) => p.gender === 'f'))
        setSelectedItems('women')
        break
      case 'men':
        setProductItem(productItem.filter((p) => p.isGender === 'male'))
        setSelectedItems('men')
        break
      default:
        getProducts()
        setSelectedItems('all')
    }
  }

  return (
    <main>
      <nav className="product-filter-nav">
        <ul>
          <p
            className={selectedItems === 'new' ? 'product-list-selected' : ''}
            onClick={() => {
              filterItems('new')
            }}
          >
            NEW
          </p>

          <p
            className={selectedItems === 'women' ? 'product-list-selected' : ''}
            onClick={() => {
              filterItems('women')
            }}
          >
            WOMEN
          </p>
          <p
            className={selectedItems === 'all' ? 'product-list-selected' : ''}
            onClick={() => {
              filterItems('all')
            }}
          >
            ALL
          </p>
          <p
            className={selectedItems === 'men' ? 'product-list-selected' : ''}
            onClick={() => {
              filterItems('men')
            }}
          >
            MEN
          </p>
        </ul>
      </nav>

      <ProductList />
    </main>
  )
}

export default ProductFilter
