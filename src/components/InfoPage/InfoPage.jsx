import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <h1>Info Page</h1>

      <h2>Technologies Used</h2>
      <ul>
        <li>React</li>
        <li>Redux Saga</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>SQL</li>
        <li>MUI</li>
        
      </ul>

      <h2>Thanks To</h2>
      <ul>
        <li>Prime Digital Academy for the instruction</li>
        <li>The Mitchison cohort for the help and advice</li>
        <li>My family for the support and for instilling me with the love of books which inspired this project</li>
      </ul>
    </div>
  );
}

export default InfoPage;
