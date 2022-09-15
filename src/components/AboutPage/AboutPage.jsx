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
          
        <p>For most, it is either a cumbersome Amazon list or typed into a phone notepad. But sometimes it takes months or years before you get around to looking through that list for one of your saved books. And by that point, the name of the book or author is often forgotten and in need of refreshing.</p>

        <p>This is where Bookworm comes in.</p>
        <p>Bookworm allows you to keep a to-be-read list with the name, author, genre, and even a picture of the cover to help you recall the book. Now, when you go through your list of books you want to read, you can quickly decide based on these criteria, without having to search each title.</p> 
        
        <p>Have fun choosing a book from your to-be-read list, with Bookworm!</p>
      </div>
    </div>
  );
}

export default AboutPage;
