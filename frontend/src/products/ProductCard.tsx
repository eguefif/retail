import type { Product } from './ProductTypes.ts'

type ProductCardProps = {
    product: Product,
};

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="productCard">
            <div className="title">{product.name}</div>
            <div className="body">{product.description}</div>
        </div>
    )
}


