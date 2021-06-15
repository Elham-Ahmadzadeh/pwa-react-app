import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginForm from '../components/form/LoginForm'
import HomePage from '../components/home/HomePage'
import addToCart from '../components/cart/Cart'

function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginForm} />
      <Route path="/cart" component={addToCart} />
    </Switch>
  )
}

export default AppRouter
