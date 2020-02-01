import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import { useFirebase } from './firebase/firebase-context';

export default function SaveScoreForm({ score }) {
  const [username, setUsername] = React.useState('');

  const firebase = useFirebase();

  const handleSubmit = e => {
    e.preventDefault();
    const record = {
      name: username,
      score,
    };
    firebase.scores().push(record, () => {
      console.log('Score saved');
      navigate('/');
    });
  };

  const handleChange = e => {
    setUsername(e.target.value);
  };

  return (
    <div className="w-full px-6 py-3">
      <div className="max-w-3xl">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleChange}
            className="input"
          />
          <br />
          <button type="submit" disabled={!username} className="mt-6 button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

SaveScoreForm.propTypes = {
  score: PropTypes.number,
};
