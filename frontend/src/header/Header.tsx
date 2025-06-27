import CartButton from "./CartButton.tsx"
import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="site-title">Shoe for one toe</div>
            <CartButton />
        </div>
    );
}
