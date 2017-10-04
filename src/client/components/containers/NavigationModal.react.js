/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './NavigationModal.scss';
import { connect } from 'react-redux';

import Modal from './Modal.react';
import NavigationBar from './NavigationBar.react';
import NavSection from '../ui/NavSection.react';

type Props = {
  visible: boolean
};

const NavigationModal = ({ visible }: Props): React$Element<> => {
  const borough = nameCapitalized => {
    return {
      name: nameCapitalized,
      route: `/borough/${nameCapitalized.replace(' ', '-').toLowerCase()}`
    };
  };
  const boroughs = {
    sectionName: 'Boroughs',
    list: [
      borough('Arran'),
      borough('HexCorp'),
      borough('Koko'),
      borough('Meditat'),
      borough('Southshire'),
      borough('Strassburg'),
      borough('Taliesin'),
      borough('Westminster')
    ]
  };

  return (
    <Modal visible={visible}>
      <NavigationBar />
      <NavSection section={boroughs.sectionName} navItems={boroughs.list} />
    </Modal>
  );
};

const mapStateToProps = state => {
  return { visible: state.navMenu };
};

export default connect(mapStateToProps)(NavigationModal);
