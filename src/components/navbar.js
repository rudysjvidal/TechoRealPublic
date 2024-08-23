import '../styles/navbar.css';

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar_logo">
            <img src="./images/TechoRealLogoWhite.png"></img>
        </div>
        <div className="navbar_menu">
            <a>INICIO</a>
            <a>NOSOTROS</a>
            <a>PROPRIEDADES</a>
            <a>CONTACTO</a>
            <a>BLOG</a>
        </div>
    </div>
  );
}

export default Navbar;
