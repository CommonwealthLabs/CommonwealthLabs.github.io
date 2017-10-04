/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Square.scss';

const Square = ({ width, color }) => {
  let backgroundColor = color || 'rgba(0,0,0,0)';
  return (
    <div
      styleName="square-container"
      style={{
        height: `${width}px`,
        width: `${width}px`,
        backgroundColor: backgroundColor
      }}
    />
  );
};

export default CSSModules(Square, styles);
