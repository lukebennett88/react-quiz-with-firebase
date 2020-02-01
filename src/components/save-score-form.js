import React from 'react';
import PropTypes from 'prop-types';
import { Link, navigate } from 'gatsby';

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
          <h2 className="text-4xl font-bold text-center">Submit high score</h2>
          <div className="flex">
            <label htmlFor="username">
              <span className="text-sm font-bold tracking-wider uppercase">
                Username
              </span>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={handleChange}
                className="input"
              />
            </label>
            <button
              type="submit"
              disabled={!username}
              className="mt-6 ml-2 button"
            >
              Save
            </button>
          </div>
          <p className="text-center">
            <Link to="/" className="mt-12 button">
              Return home
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

SaveScoreForm.propTypes = {
  score: PropTypes.number,
};
