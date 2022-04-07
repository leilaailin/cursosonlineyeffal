import imagen from "../imagenes/cursoonline.png"
function NavBar() {
    return<>
    <div className="App">
            <nav className="navbar sticky-top navbar-expand-md">
                <div className="container-fluid">
                    <div className="navbar-light">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                        <img src={imagen}></img>
                            <li className="nav-item">
                                <a className="nav-link" href="">Inicio</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href=""
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Categorias
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href=""
                                        >Auriculares</a
                                        >
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href=""
                                        >Mouse</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href=""
                                        >Teclados</a
                                        >
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
</>
}
export default NavBar;