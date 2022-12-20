import React from 'react';
import CartItem from '../components/cart/CartItem';
import CartSummury from '../components/cart/CartSummury';
import Cart from '../controller/cart/cart';

function CartPage (): JSX.Element {
  const cart = new Cart();
  const cartData = cart.loadProductsCart();
  console.log(cartData);
  return (
    <main className='cart'>
      <div className="cart-items-conrainer">
        <div className="cart-items-header">
          <h2>products in cart</h2>
          <div className="cart-state">
            <p>items</p>
            <p>page</p>
          </div>
        </div>
        <div className="cart-items-body">
          {cartData.productsCart.map((el) => <CartItem
            key={el.id}
            id={el.id}
            title={el.title}
            description={el.description}
            discountPercentage={el.discountPercentage}
            rating={el.rating}
            price={el.price}
            cartCount={el.cartCount}
            stock={el.stock}
            brand={el.brand}
            category={el.category}
            thumbnail={el.thumbnail}
            images={el.images}
            />)}
        </div>
      </div>
      <CartSummury/>
    </main>
  );
}
export default CartPage;
