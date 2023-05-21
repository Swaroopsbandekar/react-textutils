import { Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
  <nav className={`navbar  navbar-expand-lg navbar-${props.mode} bg-${props.mode}` }>
    <div className="container-fluid">
      <Link className="navbar-brand"  to="/"> <b>TextConverter</b></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">About</Link>
          </li>
        </ul>
      </div>
      <div className={`form-check form-switch text-${props.mode=== 'light'? 'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
     </div>
    </div>
   
  </nav>
  </>
  )
}
