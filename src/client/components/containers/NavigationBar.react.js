/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';

import Hamburger from '../ui/Hamburger.react';
import Logo from '../ui/Logo.react';

import styles from './NavigationBar.scss';

import { Link } from 'react-router-dom';
import store from '../../redux/store';
import { closeNavMenu } from '../../redux/actions';

const NavigationBar = ({}) => {
  const LinkAndClose = ({ to, children }) => {
    return (
      <span
        onClick={() => {
          store.dispatch(closeNavMenu());
        }}
      >
        <Link to={to}>{children}</Link>
      </span>
    );
  };
  return (
    <div styleName="navbar-container">
      <div styleName="navbar-container--padded">
        <div styleName="navbar-logo">
          <LinkAndClose to="/">
            <Logo wordmark="The Commonwealth" />
          </LinkAndClose>
        </div>
        <div styleName="navbar-hamburger">
          <Hamburger color="#478ce0" />
        </div>
      </div>
    </div>
  );
};

export default CSSModules(NavigationBar, styles);
