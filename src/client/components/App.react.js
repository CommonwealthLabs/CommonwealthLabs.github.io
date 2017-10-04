/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.scss';
import Excited from './Excited.react';
import Article from './containers/Article.react';
import SocialMediaButtons from './containers/SocialMediaButtons.react';
import NavigationBar from './containers/NavigationBar.react';
import RelatedTags from './containers/RelatedTags.react';
import SubscriptionBox from './containers/SubscriptionBox.react';

import Paragraph from './ui/Paragraph.react';
import HeroImage from './ui/HeroImage.react';
import Header from './ui/Header.react';
import Button from './ui/Button.react';
import Advert from './ui/Advert.react';
import Tag from './ui/Tag.react';
import SubscriptionInput from './ui/SubscriptionInput.react';

import ArticleExample from './ArticleExample.react';

export const App = ({ a, b }: { a: string, b: string }): React$Element<> => (
  <ArticleExample />
);

export default CSSModules(App, styles);
