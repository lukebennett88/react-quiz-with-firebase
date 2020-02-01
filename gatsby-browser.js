/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-inter';

import { FirebaseContext } from './src/components/firebase/firebase-context';
import Firebase from './src/components/firebase/firebase';
import './src/css/tailwind.css';

export const wrapRootElement = ({ element }) => (
  <FirebaseContext.Provider value={new Firebase()}>
    {element}
  </FirebaseContext.Provider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node,
};
