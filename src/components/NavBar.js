import CartWidget from "./CartWidget";
import "../index.css";
const NavBar = () =>{
    return (
        <nav>
            <h1 className="levelstore">LEVEL Store</h1>
            <div>
                <button className="boton">|  CDJs  |</button>
                <button className="boton">|  Mixers  |</button>
                <button className="boton">|  Bandejas  |</button>
                <button className="boton">|  Controladores  |</button>
                <button className="boton">|  Auriculares  |</button>
                <button className="boton">|  Cables  |</button>
                <button className="boton">|  Accesorios  |</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;