import type { Product } from "../products/ProductTypes.ts";

export type CartItem = {
  id: string;
  quantity: number;
  product: Product;
};

export type Cart = {
  items: CartItem[];
};

export type CartItemProps = {
  item: CartItem;
};
