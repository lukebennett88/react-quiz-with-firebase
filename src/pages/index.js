import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="text-4xl font-bold">Quiz App</h1>
      <Link to="/game" className="mt-6 button">
        Start Game
      </Link>
      <Link to="/high-scores" className="mt-2 button">
        High Scores
      </Link>
    </Layout>
  );
}
