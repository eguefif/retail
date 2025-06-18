import './App.css'

type ProductProps = {
    productName: string,
};

function Product({ productName }: ProductProps) {
    return (
        <div className="productCard">
            <div className="title">{productName}</div>
        </div>
    )
}

function App() {

    return (
        <>
            <Product productName={"Red Rooster"} />
        </>
    )
}

export default App
