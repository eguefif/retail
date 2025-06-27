import type { Product } from "./ProductTypes";
import ProductCard from "./ProductCard";
import { gql, useQuery } from "@apollo/client";
import "./product.css";

const PRODUCTS_QUERY = gql`
  query products {
    products {
      id
      name
      description
    }
  }
`;

export default function ProductList() {
    const { loading, error, data } = useQuery(PRODUCTS_QUERY);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const listProducts = data.products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
    ));

    return (
        <>
            <div className="productList">{listProducts}</div>
        </>
    );
}
