import styles from "./Navbar.module.css"

function Navbar () {
  return <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a id={styles.navbar} class="navbar-brand " href="#"><span className={styles.hoverit}>Home</span></a>
    <a id={styles.navbar} class="navbar-brand " href="#"><span className={styles.hoverit}>Services</span></a>
    <a id={styles.navbar} class="navbar-brand " href="#"><span className={styles.hoverit}>Gallery</span></a>
    <a id={styles.navbar} class="navbar-brand " href="#"><span className={styles.hoverit}>News</span></a>
    <a id={styles.navbar} class="navbar-brand " href="#"><span className={styles.hoverit}>Opportunities</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
}

export default Navbar;