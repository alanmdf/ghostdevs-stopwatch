import React from 'react';
import { faCog, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const icons = {
  setigins: <FontAwesomeIcon icon={ faCog } />,
  menu: <FontAwesomeIcon icon={ faBars } />,
  gitHub: <FontAwesomeIcon icon={ faGithubAlt } />,
  linkedin: <FontAwesomeIcon icon={ faLinkedinIn } />,
};

export default icons;
