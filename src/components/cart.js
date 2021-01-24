import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        const { cartItems } = this.props;
        return (
            <div>
                {cartItems.length === 0 ?
                    <div className="cart cart-header">Cart is Empty</div>
                    :
                    <div className="cart cart-header">You have {cartItems.length} items in cart.</div>
                }
            </div>
        )
    }
}
