/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './SquareMap.scss';

import Square from '../ui/Square.react';

const mockData = [
  ['#00f', false, '#00f', '#00f', false],
  ['#00f', '#00f', '#00f', '#00f', '#00f'],
  [false, false, '#00f', false, false]
];

const SquareMap = ({ data }) => {
  let squareWidth: number;
  if (!!window) {
    squareWidth = window.innerWidth / mockData[0].length - 2;
  }
  let squares = data.map((row, index) => {
    return (
      <div styleName="square-map-row">
        {row.map((square, index) => {
          return <Square width={squareWidth} color={square} />;
        })}
      </div>
    );
  });
  return <div styleName="square-map-container">{squares}</div>;
};

// const SquareMapRow = CSSModules(({ row }) => {
//   return (
//     <div styleName="square-map-row">
//       <Square width={30} color="#00f" />
//     </div>
//   );
// });

export default CSSModules(SquareMap, styles);
