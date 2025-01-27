import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="nav-section container">
          <div className="nav-section__logo">
            <a className="navbar-brand" href="#">TriSecure Solution</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>     
          <div className="nav-section__navbar collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Testimonial</a>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-info">Schedule a Conversation</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
