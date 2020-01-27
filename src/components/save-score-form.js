import React from 'react';
import PropTypes from 'prop-types';

export default function SaveScoreForm({ score }) {
  const [username, setUsername] = React.useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const record = {
      name: username,
      score,
    };
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
