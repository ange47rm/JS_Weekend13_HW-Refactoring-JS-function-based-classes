class Library {
  constructor (books = []) {
    this.books = books;
  }

  bookCount() {
    return this.books.length;
  };

  addBook (newBook) {
    this.books.push(newBook);
  };

  addBooks (newBooks) {
    newBooks.forEach(book => this.books.push(book));
  };

// SOLUTION:
//    addBooks(newBooks) {
//      this.books = [...this.books, ...newBooks];          // WHY!?
//    }


// WITH UNPACKING:

  printInventory() {
    this.books.forEach(({ author, title }) => {             // WHAT IF A BOOK OBJECT HAS MORE PARAMETERS?
      console.log(`${title} by ${author}`);
    });
  }
}

// BEFORE UNPACKING
//  printInventory () {
//    this.books.forEach((book) => {
//      console.log(`${book.title} by ${book.author}`);
//    });
// };

export default Library;
