/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Homepage.scss';

import NavigationBar from './containers/NavigationBar.react';
import Article from './containers/Article.react';
import SquareMap from './containers/SquareMap.react';

import Paragraph from './ui/Paragraph.react';
import Header from './ui/Header.react';
import HeroImage from './ui/HeroImage.react';

import Square from './ui/Square.react';

const mockData = [
  ['#00f', false, '#00f', '#00f', false],
  ['#00f', '#00f', '#00f', '#00f', '#00f'],
  [false, false, '#00f', false, false]
];

const Homepage = (): React$Element<> => (
  <div styleName="homepage">
    <NavigationBar />
    <HeroImage
      url="https://media.discordapp.net/attachments/356919227699167243/364528126916558849/2017-10-02_22.40.53.png?width=800&height=500"
      caption="Kokopolis, a Borough of the Commonwealth"
    />
    <Header heading="About Us" />
    <Article>
      <Paragraph>
        We are a nation in the -,+ quadrant. The nation is made up of various
        boroughs each with its own culture and assets. Our national government
        is a constitutional monarchy, but it has a light touch on the day-to-day
        lives of ordinary citizens. The Commonwealth is one of, if not the most
        economically active places in the world with production in virtually
        every niche. We have multiple large towns and an active player base. Our
        discord is so popular that at times our #general channel has been
        mistaken for the entire server's place for chat.
      </Paragraph>
    </Article>

    {/* <Header heading="Boroughs" /> */}
    {/* <Article>
      <Paragraph>
        The Kingdom of The Commonwealth is split up into various boroughs.
        Boroughs are what we call self-administrating, semi-autonomous towns in
        the Commonwealth. Each borough has its own, unique culture and way of
        life.
      </Paragraph>
      <Paragraph>
        You can find more information about our Boroughs below:
      </Paragraph>
    </Article> */}
  </div>
);

export default CSSModules(Homepage, styles);
