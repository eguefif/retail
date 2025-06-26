import CartItemRow from "./CartItemRow";
import type { Cart, CartItem, CartRow } from "./CartTypes";
import { gql, useQuery } from "@apollo/client";
import "./cartStyle.css";

const QUERY_VIEWER = gql`
  query Viewer {
    viewer {
      id
      cartItems {
        id
        product {
          id
          name
          description
        }
        quantity
      }
    }
  }
`;

function groupItems(items: CartItem[]): CartRow[] {
  const rows: CartRow[] = [];
  items.forEach((item) => {
    const index = rows.findIndex((row) => row.product.id === item.product.id);
    if (index == -1) {
      rows.push({ product: item.product, quantity: 1 });
    } else {
      rows[index].quantity += 1;
    }
  });

  return rows;
}

export default function Cart() {
  const { loading, data, error } = useQuery(QUERY_VIEWER, {
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const cart = data?.viewer;
  const cartRows = groupItems(cart.cartItems);
  const cartRowsView = cartRows.map((row: CartRow) => (
    <CartItemRow item={row} key={row.product.id} />
  ));
  return (
    <>
      <div className="cart">
        <h1>Cart</h1>
        <div>{cartRowsView}</div>
      </div>
    </>
  );
}
