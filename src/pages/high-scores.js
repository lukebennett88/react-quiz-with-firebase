import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function HighScores() {
  return (
    <Layout>
      <SEO title="High Scores" />
      <h1 className="text-4xl font-bold">High Scores</h1>
      <Link to="/game" className="mt-6 button">
        Start Game
      </Link>
      <Link to="/high-scores" className="mt-2 button">
        High Scores
      </Link>
    </Layout>
  );
}
