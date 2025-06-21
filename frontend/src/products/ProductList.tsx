import ProductCard from './ProductCard.tsx'

export default function ProductList() {
    const products = [
        {
            name: "Red Rooster",
            description: "fsdfdsafds fsdf dsf dsf dsaf dsfsf sf sdf "
        },
        {
            name: "Calla de choe",
            description: "fsdfdsafds fsdf dsf dsf dsaf dsfsf sf sdf "
        },
    ];

    const listProducts = products.map(product =>
        <ProductCard product={product} key={product.name} />
    );

    return (
        <>
            <div className="productList">
                {listProducts}
            </div>
        </>
    )
}
