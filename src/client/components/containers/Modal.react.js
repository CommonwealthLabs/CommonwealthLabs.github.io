/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Modal.scss';

const Modal = ({ children, visible }) => {
  return (
    visible && (
      <div styleName="modal-container">
        <div styleName="modal-exit-icon" />
        {children}
      </div>
    )
  );
};

export default CSSModules(Modal, styles);
