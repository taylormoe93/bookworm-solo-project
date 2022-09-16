import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>

        <h1>About</h1>

        <p>As an avid reader, my to-be-read list is constantly being added to.</p>
          
        <p>The list is usually a piece of paper or just a note in my phone.</p>

        <p>I often lose them or forget what the title refers to.</p>

        <p>This is where <b>Bookworm</b> comes in.</p>

        <p><b>Bookworm</b> allows you to keep a to-be-read list with the name, author, and a picture of the cover.</p> 
        
        <p>Have fun choosing a book from your to-be-read list, with <b>Bookworm!</b></p>
      </div>
    </div>
  );
}

export default AboutPage;
