import React from 'react';
import ReactDOM from 'react-dom';

/* Note: search_bar.js needs to be referenced explicitly. We don't need
   to do that for react and react-dom because they're namespaced, and/or
   because they live in node_modules. */

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA1zjtE8DuqwjysYaNvcfIGS_x-Mk9VItk';

// Create a new component. This component should produce some HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

/* The code below is the non-ES6 version of the above. The ES6 version uses
   something called the 'fat arrow function'
const App = function() {
  return <div>Hi!</div>;
}
*/

// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, // Note: JSX instantiates the App component class
                document.querySelector('.container'));
