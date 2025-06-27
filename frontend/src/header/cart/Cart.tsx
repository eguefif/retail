import CartItemRow from "./CartItemRow";
import type { Cart, CartItem, CartRow } from "./CartTypes";
import "./cartStyle.css";

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

interface CartPropType {
    data: CartItem[],
}

export default function Cart({ data: cartItems }: CartPropType) {
    const cartRows = groupItems(cartItems);
    const cartRowsView = cartRows.map((row: CartRow) => (
        <CartItemRow item={row} key={row.product.id} />
    ));
    return (
        <>
            <div className="cart">
                <div>{cartRowsView}</div>
            </div>
        </>
    );
}
