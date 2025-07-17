import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// export default function Navbar({
//   title = 'Set Title Here',
//   aboutText = "set About Text Here"
// }) 

export default function Navbar({
  title = 'Set Title Here',
  aboutText = 'About',
  mode = 'light',
  toogleMode
}) 
{
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      {/* console.log({mode}); */}
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><b>X{title}X</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{aboutText}</Link>
            </li>
            
          </ul>
          {/* <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toogleMode} />
            <label className={`mx-2 form-check-label text-${mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault"  >Green</label>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toogleMode} />
            <label className={`mx-2 form-check-label text-${mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault"  >Blue</label> */}
          {/* </div> */}
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toogleMode} />
            <label className={`mx-2 form-check-label text-${mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault"  >Dark</label>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{backgroundColor: mode==="light"? "white":"black", color: mode==="light"? "black":"white", placeholder: mode==="light"? "black":"white",}} />
            <button className={`btn btn-outline-primary text-${mode==='light'?'dark':'light'}`} type="submit"><b>Search</b></button>
          </form>
        </div>
      </div>
    </nav>
  )
}


Navbar.propTypes = {
    title : PropTypes.string,
    aboutText : PropTypes.string,
}

// Navbar.defaultProps = {
//     title : 'Set Title Here',
//     aboutText : "set About Text Here",
// }