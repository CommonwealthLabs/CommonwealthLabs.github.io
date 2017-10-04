/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './FooterSection.scss';

const FooterSection = ({ children }) => {
  return (
    <div styleName="footer-section">
      <span styleName="footer-text">{children}</span>
    </div>
  );
};

export default CSSModules(FooterSection, styles);
