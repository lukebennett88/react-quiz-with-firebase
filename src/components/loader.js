import React from 'react';
import Spinner from 'react-svg-spinner';
import tw from 'tailwindcss/defaultTheme';

export const Loader = () => {
  return <Spinner size="4rem" color={tw.colors.blue[600]} thickness={3} />;
};
