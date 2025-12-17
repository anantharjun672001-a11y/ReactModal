const NavBar = ({ cartCount, openCart }) => {
  return (
    <nav className="navbar">
      <h2>Fake Store</h2>
      <button onClick={openCart}>Cart ({cartCount})</button>
    </nav>
  );
};

export default NavBar;
