import './App.css'

type ProductProps = {
    product: Product,
};

function Product({ product }: ProductProps) {
    return (
        <div className="productCard">
            <div className="title">{product.name}</div>
            <div className="body">{product.description}</div>
        </div>
    )
}

type Product = {
    name: string,
    description: string
}

function App() {
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
        <Product product={product} />
    );

    return (
        <>
            <div className="productList">
                {listProducts}
            </div>
        </>
    )
}

export default App
