import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This is the home page of the React Router App.</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
};

export default Home;
