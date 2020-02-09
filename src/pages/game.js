import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { loadQuestions } from '../helpers/load-questions';
import Question from '../components/question';
import { Loader } from '../components/loader';
import { HUD } from '../components/hud';

export default function GamePage() {
  const [questions, setQuestions] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  console.log(progress);

  const numberOfQuestions = 10;

  React.useEffect(() => {
    const getQuestions = async () => {
      try {
        const newQuestions = await loadQuestions({
          amount: numberOfQuestions,
          category: 9,
          difficulty: 'easy',
          type: 'multiple',
        });
        setQuestions(newQuestions);
      } catch (err) {
        console.error(err);
      }
    };
    getQuestions();
  }, []);

  const changeQuestion = () => {
    const prevQuestions = [...questions];
    prevQuestions.shift();
    setQuestions(prevQuestions);
  };

  return (
    <Layout>
      <SEO title="Game" />
      {questions === null ? (
        <Loader />
      ) : (
        <>
          <HUD
            numberOfQuestions={numberOfQuestions}
            progress={progress}
            score={score}
          />
          <Question
            changeQuestion={changeQuestion}
            numberOfQuestions={numberOfQuestions}
            progress={progress}
            setProgress={setProgress}
            question={questions[0]}
            score={score}
            setScore={setScore}
          />
        </>
      )}
    </Layout>
  );
}
