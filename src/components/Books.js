import React, {  Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';
import { CardColumns } from 'reactstrap';

class Books extends Component {
  render() {
    return (
    // return this.props.books.map(book => (
      <CardColumns>
        {/* Buat sebuah perulangan untuk semua objek pada array book maka panggil component Book */}
        {/* Isi disini  */}
        {
        this.props.books.map(book => (
          <Book book={book}/>
        ))
        }
      </CardColumns>
    // ))
    )
  }
}

//PropTypes
Books.propTypes = {
  books: PropTypes.array.isRequired,
}


export default Books;