import React from 'react'
import { Link } from 'react-router-dom'

import '../components/cartItem/cartItem.scss'

import cartEmpty from '../assets/img/empty-cart.png'

function Cart() {
  return (
    <div className="cart-content">
      <div className="cart cart--empty">
        <h2>
          Корзина пустая
          </h2>
        <p>
          Вероятней всего, вы ничего не добавили.
            <br />
            Для того, сделать заказ, перейдите на главную страницу.
          </p>
        <img src={cartEmpty} alt="Empty cart" />
        <Link to="/" class="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  )
}

export default Cart
