import React, { useEffect, useState } from 'react';
import { axiosDB } from '../axiosConfig';

const BookCatalog = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', isbn: '' });

  const fetchBooks = async () => {
    try {
      const response = await axiosDB.get('/books.json');
      const booksData = response.data;
      if (booksData) {
        const booksList = Object.keys(booksData).map((key) => ({
          id: key,
          ...booksData[key],
        }));
        setBooks(booksList.filter((book) => !book.isDeleted)); 
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAddBook = async () => {
    if (newBook.title && newBook.author && newBook.isbn) {
      try {
        await axiosDB.post('/books.json', newBook);
        setNewBook({ title: '', author: '', isbn: '' });
        fetchBooks(); 
      } catch (error) {
        console.error('Error adding book:', error);
      }
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await axiosDB.patch(`/books/${id}.json`, { isDeleted: true });
      fetchBooks(); 
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      <h1>Book Catalog</h1>
      <div>
        <input
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          placeholder="ISBN"
          value={newBook.isbn}
          onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {books.map((book) => (
          <div key={book.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCatalog;