import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Hello, World! This is my Home Page</h1>
      
      <button onClick={() => navigate('/profile/15')}>Go To Home</button>
    </div>
  );
}

export default Home;