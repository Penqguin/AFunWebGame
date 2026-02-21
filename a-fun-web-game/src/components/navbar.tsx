

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/afunwebgame.svg" alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title">A Fun Web Game</h1>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Create</a></li>
      </ul>

      <div className="navbar-right" aria-hidden="true" />
    </nav>
  )
}
export default Navbar