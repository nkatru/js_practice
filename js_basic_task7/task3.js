const Library = {
  books: [],

  addBook(bookName, bookAuthor, bookYear, bookId) {
    const newBook = {
      bookName: bookName,
      bookAuthor: bookAuthor,
      bookYear: bookYear,
      bookId: bookId,
    };
    this.books.push(newBook);
  },
  printBookInfo(bookId) {
    const book = this.books.find((b) => b.bookId === bookId);
    if (book) {
      console.log(`Book Name: ${book.bookName}`);
      console.log(`Author: ${book.bookAuthor}`);
      console.log(`Year: ${book.bookYear}`);
      console.log(`ID: ${book.bookId}`);
    } else {
      console.log(`Book with ID: ${bookId} not found.`);
    }
  },
  printAllBooks() {
    if (this.books.length === 0) {
      console.log("No books available.");
      return;
    }
    this.books.forEach((book) => {
      console.log(`Book Name: ${book.name}`);
      console.log(`Author: ${book.author}`);
      console.log(`Year: ${book.year}`);
      console.log(`ID: ${book.id}`);
      console.log("--------------");
    });
  },
};
Library.addBook("Johny Limoni", "QA Tester. Part 1", 2020, 243434);
Library.addBook("Johny Limoni", "QA Tester. Part 2", 2020, 243435);
Library.addBook("Johny Limoni", "QA Tester. Part 3", 2020, 243436);
Library.addBook("Johny Limoni", "QA Tester. Part 4", 2020, 243437);

Library.printBookInfo(243434);
