import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className="px-6 py-4 -mx-2">
      <Link to="/" className="px-2 font-bold">
        Home
      </Link>
      <Link to="/game" className="px-2 font-bold">
        New Game
      </Link>
      <Link to="/high-scores" className="px-2 font-bold">
        High Scores
      </Link>
    </header>
  );
};

export default Header;
