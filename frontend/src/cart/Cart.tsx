import CartItemRow from "./CartItem";
import type { Cart, CartItem } from "./CartTypes";

export default function Cart() {
  const item1: CartItem = {
    id: "1",
    name: "Product 1",
    price: 10,
    quantity: 2,
  };

  const item2: CartItem = {
    id: "2",
    name: "Other product 2",
    price: 15,
    quantity: 5,
  };

  const cart: Cart = {
    items: [item1, item2],
  };

  const listItems = cart.items.map((item: CartItem) => (
    <CartItemRow item={item} key={item.id} />
  ));
  return (
    <>
      <div className="cart">
        <h1>Cart</h1>
        <div>{listItems}</div>
      </div>
    </>
  );
}
