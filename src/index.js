import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

/* Note: search_bar.js needs to be referenced explicitly. We don't need
   to do that for react and react-dom because they're namespaced, and/or
   because they live in node_modules. */

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyA1zjtE8DuqwjysYaNvcfIGS_x-Mk9VItk';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'twin beech'}, (videos) => {
      // Whenever we have a key and value with the same name, we can use a
      // piece of ES6 to make the syntax a bit cleaner: { name }
      this.setState({ videos });
      // This is eqivalent to: this.setState({ videos: videos });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
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
