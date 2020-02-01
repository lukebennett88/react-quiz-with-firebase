import React from 'react';

export const FirebaseContext = React.createContext(null);

// export const useFirebase = React.useContext(FirebaseContext);

export const useFirebase = () => {
  const context = React.useContext(FirebaseContext);
  return context;
};
