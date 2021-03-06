import React from 'react';
import PropTypes from 'prop-types';

export const HUD = ({ numberOfQuestions, progress, score }) => {
  return (
    <div className="w-full px-6 py-3">
      <div className="flex flex-wrap items-start justify-center max-w-3xl md:justify-between">
        <div className="w-full text-xl font-bold leading-none text-center md:w-auto">
          <p>
            Progress{' '}
            <small>
              {progress}/{numberOfQuestions}
              {}
            </small>
          </p>
          <progress
            max={numberOfQuestions}
            value={progress || 0.1}
            className="mt-2 bg-white"
          />
        </div>
        <div className="w-full md:w-auto">
          <div className="text-xl font-bold leading-none text-center">
            <p>Score:</p>
            <p className="flex items-center justify-center w-12 h-12 mx-auto mt-2 text-4xl text-white bg-blue-600 rounded-full">
              {score}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

HUD.propTypes = {
  numberOfQuestions: PropTypes.number,
  progress: PropTypes.number,
  score: PropTypes.number,
};
