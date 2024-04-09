import React from 'react';
import "../styles/SocialLinks.css";



const SocialLinks = () => {
  return (
    <>
      <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
      <nav className="social">
        <ul>
          <li><a href="">Instagram <i className="fa fa-instagram"></i></a></li>
          <li><a href="https://github.com/Dripgl">Github <i className="fa fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/gabriele-zito-987452217/">Linkedin <i className="fa fa-linkedin"></i></a></li>
        </ul>
      </nav>
    </>
  );
};

export default SocialLinks;
