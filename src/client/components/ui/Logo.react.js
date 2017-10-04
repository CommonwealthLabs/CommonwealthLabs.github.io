/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Logo.scss';

type Props = {
  wordmark: string,
  wordmarkSize: number
};

const Logo = ({ wordmark, wordmarkSize }: Props): React$Element<> => {
  return (
    <div styleName="logo-container">
      <span styleName="logo-wordmark" style={{ fontSize: `${wordmarkSize}px` }}>
        {wordmark}
      </span>
    </div>
  );
};

export default CSSModules(Logo, styles);
