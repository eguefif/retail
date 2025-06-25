import type { CartItemProps } from "./CartTypes";

export default function CartItemRow({ item }: CartItemProps) {
  return (
    <div className="cart-item">
      <span className="cart-item-name">{item.product.name}</span>
      <span className="cart-item-quantity">{item.quantity}</span>
    </div>
  );
}
