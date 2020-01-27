import React from 'react';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-blue-600 bg-blue-100">
      <main
        id="main"
        className="flex flex-col items-center justify-center flex-1 w-full max-w-4xl px-4 pb-6 mx-auto"
      >
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
