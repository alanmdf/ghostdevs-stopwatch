import React from 'react';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {
  faPlayCircle,
  faPauseCircle,
  faStopCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const icons = {
  gitHub: <FontAwesomeIcon icon={ faGithubAlt } />,
  linkedin: <FontAwesomeIcon icon={ faLinkedinIn } />,
  play: <FontAwesomeIcon icon={ faPlayCircle } />,
  pause: <FontAwesomeIcon icon={ faPauseCircle } />,
  stop: <FontAwesomeIcon icon={ faStopCircle } />,
};

export default icons;
