import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <Link to="/donation">Github</Link>
      <Link to="/">LinkedIn</Link>
      <div className="container">&copy;2022 by Antonia Garcia</div>
    </footer>
  );
};

export default Footer;