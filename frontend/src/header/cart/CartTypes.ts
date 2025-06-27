import type { Product } from "@/mainContainer/products/ProductTypes.ts";

export type CartRow = {
  quantity: number;
  product: Product;
};

export type CartItem = {
  id: string;
  product: Product;
};

export type Cart = {
  items: CartItem[];
};

export type CartItemProps = {
  item: CartRow;
};
