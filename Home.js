import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Web Development</h1>
      <p>Want to learn web development then click on the link below.</p>
      <Link to="/moretext">Click here to learn the awesome secrets of web development yo!</Link>
    </div>
  );
}

export default Home;