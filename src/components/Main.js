import React, { useState } from 'react';
import BookCard from './bookCard';

const Main = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "مقدمة ابن خلدون", author: "ابن خلدون", isbn: "1289499030" },
    { id: 2, title: "الحاوي في الطب", author: "ابو بكر الرازي", isbn: "893847239479" },
    { id: 3, title: "رجل تحت الصفر", author: "إبراهيم أصلان", isbn: "9789770930003" },
    { id: 4, title: "الحرافيش", author: "نجيب محفوظ", isbn: "9789770930004" },
    { id: 5, title: "زقاق المدق", author: "نجيب محفوظ", isbn: "9789770930005" },
    { id: 6, title: "موسم الهجرة إلى الشمال", author: "الطيب صالح", isbn: "9789770930006" },
    { id: 7, title: "الخبز الحافي", author: "محمد شكري", isbn: "9789770930007" },
    { id: 8, title: "عمارة يعقوبيان", author: "علاء الأسواني", isbn: "9789770930008" },
    { id: 9, title: "شيكاجو", author: "علاء الأسواني", isbn: "9789770930009" },
    { id: 10, title: "ساق البامبو", author: "سعود السنعوسي", isbn: "9789770930010" },
    { id: 11, title: "فرانكشتاين في بغداد", author: "أحمد سعداوي", isbn: "9789770930011" },
    { id: 12, title: "السمة الغالبة", author: "إبراهيم عبد المجيد", isbn: "9789770930012" }
  ]);

  return (
    <main>
      <h2>الكتب</h2>
      <div className="books-container">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
};

export default Main;