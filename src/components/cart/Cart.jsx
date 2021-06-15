import { connect } from 'react-redux'

function Cart(props) {
  return (
    <section className="product-list-main">
      {props.cartArr.cartArr.map((item) => (
        <ol key={item.id}>
          <img className="product-image" src={item.image} alt={item.name} />
          <li className="product-title">{item.name}</li>
          <li className="product-price">{item.price}€</li>
        </ol>
      ))}
      <div>
        {props.cartArr.cartArr.length === 0 ? (
          <div>Cart is empty :/</div>
        ) : (
          <div>You have {props.cartArr.cartArr.length} items in your cart</div>
        )}
      </div>
    </section>
  )
}

export default connect((state) => ({
  cartArr: state.cart
}))(Cart)
