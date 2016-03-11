import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
};

//This function is the glue between a React component and Redux
//Whenever the state changes, this function will execute
function mapStateToProps(state) {
  //Anything returned from here will show up as props
  //Inside of BookList
  return {
    books: state.books
  };
}

//Anything returned from this function will end up as props
//On the BookList container
function mapDispatchToProps(dispatch) {
  //When selectBook is called, the result will be passed
  //to every single reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

//Promote BookList from a component to a container - it needs to know
//About this new dispatch method, selectBook. Make it available
//as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
