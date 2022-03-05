import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <Link to={{pathname: "https://github.com/Iviviana?tab=repositories"}} target="_blank">Github</Link>
      <Link to={{pathname:"https://www.linkedin.com/in/antonia-garcia-7127a01a8/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B8pkAOjjPQfyYvD%2Fr16993Q%3D%3D"}} target="_blank">LinkedIn</Link>
      <div className="container">&copy;2022 by Antonia Garcia</div>
    </footer>
  );
};

export default Footer;