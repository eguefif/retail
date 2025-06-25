import type { Product } from "./ProductTypes.ts";
import { gql, useMutation } from "@apollo/client";

type ProductCardProps = {
  product: Product;
};

const ADD_ITEM_MUTATION = gql`
  mutation AddItem($productId: ID!) {
    addItem(productId: $productId) {
      item {
        id
      }
      success
    }
  }
`;

export default function ProductCard({ product }: ProductCardProps) {
  const [mutateFunction, { error }] = useMutation(ADD_ITEM_MUTATION, {
    refetchQueries: ["Viewer"],
  });

  if (error) {
    console.error(error);
  }

  const addItem = (productId: string) => {
    console.log(`Adding product with ID ${productId}`);
    mutateFunction({ variables: { productId: productId } });
  };
  return (
    <div className="productCard">
      <div className="title">{product.name}</div>
      <div className="body">{product.description}</div>
      <button onClick={() => addItem(product.id)}>Add To Cart</button>
    </div>
  );
}
