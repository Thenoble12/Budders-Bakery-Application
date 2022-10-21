import React from 'react';
import Logolarge from '../../common/Logo/Logolarge'
import './Footer.css';
import SocialFollow from './SocialFollow';

function Footer() {
  return (
    <footer>
      <div>
        <p>
          We're a team of Professional cooks who are excited about their food,
          amazing skills and expertiness in cooking.{' '}
        </p>
      </div>
      
      <div>
        <SocialFollow />
      </div>
     
      <Logolarge />
    </footer>
  );
};

export default Footer;