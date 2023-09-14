import { FaSearch, FaShoppingBag } from "react-icons/fa";
import logo from "../img/logo.png";

export default function Header() {
  return (
    <nav className="nav navv">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 flex">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#menu-button"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a href="#" className="navbar-brand">
                <img src={logo} className="img img-responsive" alt="" />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="menu-button">
              <ul className="nav navbar-nav">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Вikes</a>
                </li>
                <li>
                  <a href="#">Gear</a>
                </li>
                <li>
                  <a href="#">Parts</a>
                </li>
                <li>
                  <a href="#">Tires</a>
                </li>
                <li>
                  <a href="#">Service-info</a>
                </li>
                <li>
                  <a href="#">Catalogues</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="icons-menu">
              <span>
                <FaSearch className="fas" />
                <FaShoppingBag className="fas" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </nav>
  );
}
