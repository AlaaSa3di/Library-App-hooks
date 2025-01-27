import React from 'react';

const BookCard = ({ book }) => {
  const { title, author, isbn } = book;

  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>ISBN: {isbn}</p>
    </div>
  );
};

export default BookCard;