import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { loadQuestions } from '../helpers/load-questions';
import Question from '../components/question';
import { Loader } from '../components/loader';

export default function GamePage() {
  const [state, setState] = React.useState(null);

  React.useEffect(() => {
    const getQuestions = async () => {
      try {
        const questions = await loadQuestions({
          amount: 10,
          category: 9,
          difficulty: 'easy',
          type: 'multiple',
        });
        setState(questions);
      } catch (err) {
        console.error(err);
      }
    };
    getQuestions();
  }, []);

  const changeQuestion = () => {
    const prevState = [...state];
    prevState.shift();
    setState(prevState);
  };

  return (
    <Layout>
      <SEO title="Game" />
      {state === null ? (
        <Loader />
      ) : (
        <Question question={state[0]} changeQuestion={changeQuestion} />
      )}
    </Layout>
  );
}
