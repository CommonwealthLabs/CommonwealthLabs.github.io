/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './NavSection.scss';

import store from '../../redux/store';
import { closeNavMenu } from '../../redux/actions';

import { Link } from 'react-router-dom';

const NavSection = ({ section, navItems }) => {
  const LinkAndToggle = ({ to, children }) => {
    return (
      <span
        onClick={() => {
          store.dispatch(closeNavMenu());
        }}
      >
        {/* <Link to={to}> */}
        {children}
        {/* </Link> */}
      </span>
    );
  };

  const NavMenuItems = navItems.map((menuItem, index) => {
    return (
      <li key={`nav-menu-item-${index}`}>
        <LinkAndToggle to={menuItem.route}>{menuItem.name}</LinkAndToggle>
      </li>
    );
  });

  return (
    <div styleName="nav-section">
      <h3>{section}</h3>
      <h4>(NavMenu Under Construction)</h4>
      <ul>{NavMenuItems}</ul>
    </div>
  );
};

export default CSSModules(NavSection, styles);
