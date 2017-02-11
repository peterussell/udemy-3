import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

/* Note: search_bar.js needs to be referenced explicitly. We don't need
   to do that for react and react-dom because they're namespaced, and/or
   because they live in node_modules. */

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyA1zjtE8DuqwjysYaNvcfIGS_x-Mk9VItk';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('new zealand dc3');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
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
