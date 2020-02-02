import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { useFirebase } from '../components/firebase/firebase-context';
import { Loader } from '../components/loader';

export default function HighScores() {
  const [scores, setScores] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const firebase = useFirebase();

  React.useEffect(() => {
    firebase.scores().once('value', snapshot => {
      const data = snapshot.val();
      const formattedScores = Object.values(data).map((score, index) => {
        return {
          key: index,
          name: score.name,
          score: score.score,
        };
      });
      const topScores = formattedScores.slice(0, 10);
      const sortedScores = topScores.sort(
        (score2, score1) => score1.score - score2.score
      );
      setScores(sortedScores);
      setLoading(false);
    });
  }, [firebase]);

  return (
    <Layout>
      <SEO title="High Scores" />
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-4xl font-bold">High Scores</h1>
          <ul>
            {scores.map(score => (
              <li key={score.key}>
                {score.name}: {score.score}
              </li>
            ))}
          </ul>
          <Link to="/game" className="mt-6 button">
            New Game
          </Link>
        </>
      )}
    </Layout>
  );
}
