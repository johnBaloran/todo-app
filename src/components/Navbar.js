const Navbar = ({ complete, incomplete }) => {
  return (
    <header>
      <h1 className="header">TODO - TODAY</h1>

      <nav>
        <ul>
          <li>
            <p>
              Incomplete Todo: <span>{incomplete}</span>
            </p>
          </li>
          <li>
            <p>
              Complete Todo: <span>{complete}</span>
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
