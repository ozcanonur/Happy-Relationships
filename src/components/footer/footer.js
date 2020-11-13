import React from 'react';
import classes from './footer.module.scss';

import Instagram from '../../assets/svg/instagram.inline.svg';
import Twitter from '../../assets/svg/twitter.inline.svg';
import Facebook from '../../assets/svg/facebook.inline.svg';
import Linkedin from '../../assets/svg/linkedin.inline.svg';

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.copyright}>
        &copy; 2020 Happy Relationships Inc.
      </div>
      <button href="#" className={classes.privacy}>
        Privacy Policy
      </button>
      <div className={classes.socialMediaContainer}>
        <Instagram />
        <Twitter />
        <Facebook />
        <Linkedin />
      </div>
    </footer>
  );
};

export default Footer;