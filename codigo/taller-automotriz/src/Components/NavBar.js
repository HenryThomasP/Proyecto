import logo from '../Assets/logo.png';
function NavBar(){
    return (
        <header className="header">
    <div className="container logo-nav-container">
        <div className="divlogo">
            <a href="index.html">
                <img src={logo} alt="Logo Taller Automotriz" width="150px" height="107px" title="Logo Taller Automotriz"/>
            </a>
        </div>
        <nav className="navigation">
            <ul className="ul">
                <li>
                    <a className="a" href="index.html">Inicio.</a>
                </li>
                <li>
                    <a className="a" href="servicios.html">Servicios</a>
                </li>
                <li>
                    <a className="a" href="registro1.html">Agendar Citas.</a>
                </li>
                <li>
                    <a className="a" href="administracion.html" target="_blank">Administracion.</a>
                </li>
            </ul>
        </nav>
    </div>
</header>
    );
}
export default NavBar