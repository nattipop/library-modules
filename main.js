// write your code here to make the tests pass
var Library = function() {
  var books = [];

  var checkOutBook = function(book) {
    if(books.includes(book)) {
      book.setAttribute('checkedOut', true)
    }
  };

  var returnBook = function(book) {
    if(books.includes(book)) {
      book.setAttribute('checkedOut', false);
    }
  };

  var addBook = function(book) {
    books.push(book);
  };

  return {
    checkOutBook: checkOutBook,
    returnBook: returnBook,
    addBook: addBook,
  }
};

var library = Library();

var Book = function(title, author) {
  var attributes = {
    title: title,
    author: author,
    checkedOut: false,
  };

  var getAttribute = function(property) {
    if (attributes.hasOwnProperty(property)) {
      return attributes[property];
    }
  };

  var setAttribute = function(property, value) {
    if (attributes.hasOwnProperty(property)) {
      attributes[property] = value;
    }
  };

  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute,
  };
};
