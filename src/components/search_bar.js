
/* The syntax { Component } means pull out 'Component' from the 'React'
   class, and store it in a variable named Component.
   Similar to const Component = React.Component;
*/
import React, { Component } from 'react';

/* Functional Component:
    - 0 or more args go in, some JSX comes out.

   Class-based Component:
    - used for Components which need to store state.

   SearchBar is a class-based component, to see it configured as a
   functional component, check out git commit
   86c77892a64aeb0469dbf6f6485958d62c040dee
*/

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  /* Every class-based Component must have a render() method which
     returns some JSX. */

  /* This is a Controlled Component, meaning that the value of the
     input is set by the state, rather than directly by input from
     the user. */
  render() {
    return (
      <div>

        <input
          onChange={e => this.setState({ term: e.target.value })}
          value={this.state.term} />
      </div>
    );
  }
}

/* State:
    - state is a plain JavaScript object.
    - each class-based component has its own state
    - whenever a class' state is changed, it gets re-rendered (render()
       method is called)
    - when a component is re-rendered because of a state change, all of
       its children also have their render() methods called
*/

export default SearchBar;
