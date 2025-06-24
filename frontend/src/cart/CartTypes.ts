export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
};

export type CartItemProps = {
  item: CartItem;
};
