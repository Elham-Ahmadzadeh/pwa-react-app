
import './App.scss'
import React, { useState, useEffect } from 'react'
import AppRouter from './router/AppRouter'
import HeaderLinks from './components/header/HeaderLinks'

import ProductContext from './context/ProductContext'
import { BrowserRouter as Router } from 'react-router-dom'

import axios from 'axios'

function App(props) {
  const [productItem, setProductItem] = useState('')

  const getProducts = async () => {
    const res = await axios.get('products.json')
    setProductItem(res.data)
  }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <Router>
      <ProductContext.Provider value={{ productItem, setProductItem, getProducts }}>
        <HeaderLinks value={props.value} />
        <AppRouter />
      </ProductContext.Provider>
    </Router>
  )
}

export default App
