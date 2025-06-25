import CartItemRow from "./CartItemRow";
import type { Cart, CartItem } from "./CartTypes";
import { gql, useQuery } from "@apollo/client";

const QUERY_VIEWER = gql`
  query Viewer {
    viewer {
      id
      cartItems {
        id
        product {
          name
          description
        }
        quantity
      }
    }
  }
`;

export default function Cart() {
  const { loading, data, error } = useQuery(QUERY_VIEWER, {
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const cart = data?.viewer;
  const listItems = cart.cartItems.map((item: CartItem) => (
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
