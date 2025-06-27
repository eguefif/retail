import CartSVG from "../assets/cart.svg";
import Cart from "./cart/Cart.tsx";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";

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



export default function Header() {
    const [open, setOpen] = useState(false);

    function toggleDropdown() {
        setOpen((prev) => !prev);
    }

    const { loading, data, error } = useQuery(QUERY_VIEWER, {
        fetchPolicy: "cache-and-network",
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;


    return (
        <>
            <div
                className="cart-logo" onClick={toggleDropdown}
                onMouseEnter={() => setOpen(() => true)}
            >
                <img className="svg-style" src={CartSVG} />
                {open && (<Cart data={data?.viewer.cartItems} />)}
            </div>
        </>

    );
}

