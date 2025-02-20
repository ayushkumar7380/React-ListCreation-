import styles from "./Navbar.module.css"

function Navbar () {
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a id={styles.navbar} className="navbar-brand " href="#"><span className={styles.hoverit}>Home</span></a>
    <a id={styles.navbar} className="navbar-brand " href="#"><span className={styles.hoverit}>Services</span></a>
    <a id={styles.navbar} className="navbar-brand " href="#"><span className={styles.hoverit}>Gallery</span></a>
    <a id={styles.navbar} className="navbar-brand " href="#"><span className={styles.hoverit}>News</span></a>
    <a id={styles.navbar} className="navbar-brand " href="#"><span className={styles.hoverit}>Opportunities</span></a>
    <button className="navbar-toggler" id={styles.nav3line} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
}

export default Navbar;