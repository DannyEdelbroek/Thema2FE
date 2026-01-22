import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link } from 'react-router-dom';
import { AiOutlineGlobal } from "react-icons/ai";

function Nav() {
  return (
    <nav style={{ backgroundColor: '#f0efef' }}
      className="navbar navbar-expand-lg border-bottom">
      {/* CENTRERING */}
      <div className="container">
        {/* Logo links */}
        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
          <div className="p-1 rounded-1 bg-black">
            <AiOutlineGlobal size={40} color="white" />
          </div>
          <span>Global
            <span className='color-red'>News</span>
            Wire</span>
        </Link>
        {/* Hamburger */}   
        <button className="navbar-toggler"
          type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
          <span className="navbar-toggler-icon">
          </span>
        </button> {/* Menu rechts */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link px-3" to="/">Home</Link> </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>);
} export default Nav;
