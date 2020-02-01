import React from 'react';
import PropTypes from 'prop-types';
import SaveScoreForm from './save-score-form';

export default function Question({
  changeQuestion,
  numberOfQuestions,
  progress,
  setProgress,
  question,
  score,
  setScore,
}) {
  const [selectedAnswer, setSelectedAnswer] = React.useState(-1);
  const [textColor, setTextColor] = React.useState('text-blue-600');
  const [bgColor, setBgColor] = React.useState('bg-blue-600');
  const [borderColor, setBorderColor] = React.useState('border-blue-600');
  const [answering, setAnswering] = React.useState(false);

  const checkAnswers = answer => {
    if (answering) return;
    setAnswering(true);
    setSelectedAnswer(answer);
    if (answer === question.answer) {
      setTextColor('text-green-600');
      setBgColor('bg-green-600');
      setBorderColor('border-green-600');
    } else {
      setTextColor('text-red-600');
      setBgColor('bg-red-600');
      setBorderColor('border-red-600');
    }
    const bonus = answer === question.answer ? 1 : 0;
    setScore(score + bonus);
    if (progress < numberOfQuestions) {
      setProgress(progress + 1);
    }
    setTimeout(() => {
      setSelectedAnswer(-1);
      setAnswering(false);
      changeQuestion();
    }, 1000);
  };

  return (
    <div className="px-6 py-3 my-auto">
      <div className="max-w-3xl">
        {question ? (
          <>
            <h2
              className="mt-4 text-2xl font-bold leading-none text-center"
              dangerouslySetInnerHTML={{ __html: question.question }}
            />
            <div className="mt-8">
              {question.answerChoices.map((q, i) => (
                <button
                  key={q}
                  type="button"
                  className={`${`${selectedAnswer === i &&
                    `${textColor} ${borderColor}`} `}flex items-center w-64 p-0 mx-auto mt-2 button`}
                  disabled={answering}
                  onClick={() => checkAnswers(i)}
                >
                  <div
                    className={`flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm font-bold text-white ${` ${
                      selectedAnswer === i ? bgColor : 'bg-blue-600'
                    }`}`}
                  >
                    {i + 1}
                  </div>
                  <p
                    className="w-full px-2 text-center"
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                </button>
              ))}
              <p className="w-full text-center">
                <button
                  type="button"
                  onClick={() => {
                    setProgress(progress + 1);
                    changeQuestion();
                  }}
                  disabled={answering}
                  className="mt-12 button"
                >
                  Skip question
                </button>
              </p>
            </div>
          </>
        ) : (
          <SaveScoreForm score={score} />
        )}
      </div>
    </div>
  );
}

Question.propTypes = {
  changeQuestion: PropTypes.func,
  numberOfQuestions: PropTypes.number,
  progress: PropTypes.number,
  setProgress: PropTypes.func,
  question: PropTypes.object,
  score: PropTypes.number,
  setScore: PropTypes.func,
};
