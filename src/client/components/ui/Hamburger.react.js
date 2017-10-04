/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Hamburger.scss';

// import { connect } from 'react-redux';

import store from '../../redux/store';

import { toggleNavMenu } from '../../redux/actions';

const Hamburger = ({ color }): React$Element<> => {
  return (
    <div styleName="hamburger-container">
      <a
        onClick={() => {
          console.log('TOGGLE', store);
          store.dispatch(toggleNavMenu());
          console.log('TOGGLED', store.getState());
        }}
      >
        <div
          styleName="hamburger-vertical-bar"
          style={{ backgroundColor: color }}
        />
        <div
          styleName="hamburger-vertical-bar"
          style={{ backgroundColor: color }}
        />
        <div
          styleName="hamburger-vertical-bar"
          style={{ backgroundColor: color }}
        />
      </a>
    </div>
  );
};

export default CSSModules(Hamburger, styles);
