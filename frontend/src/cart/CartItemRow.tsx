import type { CartItemProps } from "./CartTypes";
import { gql, useMutation } from "@apollo/client";

const REMOVE_ITEM_MUTATION = gql`
  mutation RemoveItem($productId: ID!) {
    removeItem(productId: $productId) {
      success
    }
  }
`;

export default function CartItemRow({ item }: CartItemProps) {
  const [mutateFunction] = useMutation(REMOVE_ITEM_MUTATION, {
    refetchQueries: ["Viewer"],
  });
  const removeItem = () => {
    mutateFunction({ variables: { productId: item.product.id } });
  };
  return (
    <div className="cart-item">
      <span className="cart-item-name">{item.product.name}</span>
      <span className="cart-item-quantity">{item.quantity}</span>
      <button onClick={() => removeItem()}>-</button>
    </div>
  );
}
