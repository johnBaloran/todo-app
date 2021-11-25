const Navbar = ({ complete, incomplete }) => {
  return (
    <header>
      <h1 className="header">TODO - TODAY</h1>

      <nav>
        <ul>
          <li>
            <p>
              Incomplete : <span>{incomplete}</span>
            </p>
          </li>
          <li>
            <p>
              Complete : <span>{complete}</span>
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
