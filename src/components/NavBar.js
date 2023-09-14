import CartWidget from "./CartWidget";
const NavBar = () =>{
    return (
        <nav>
            <h1>LEVEL Store</h1>
            <div>
                <button>CDJs</button>
                <button>Mixers</button>
                <button>Bandejas</button>
                <button>Controladores</button>
                <button>Auriculares</button>
                <button>Cables</button>
                <button>Accesorios</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;