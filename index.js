// Object literal demonstration
const sampleBook = {
    title: 'Sample Book',
    author: 'Sample Author',
    isbn: '1234567890',
    displayInfo: function() {
        return `${this.title} by ${this.author} (ISBN: ${this.isbn})`;
    }
};

console.log(sampleBook.displayInfo());

// Constructor function
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

Book.prototype.displayInfo = function() {
    return `${this.title} by ${this.author} (ISBN: ${this.isbn})`;
};

// Create book instances
const book1 = new Book('1984', 'George Orwell', '1234567890');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', '0987654321');

console.log(book1.displayInfo());
console.log(book2.displayInfo());

// Constructor function with private properties 
function BookWithPrivateProperties(title, author, isbn) {
    let _title = title;
    let _author = author;
    let _isbn = isbn;

    this.displayInfo = function() {
        return `${_title} by ${_author} (ISBN: ${_isbn})`;
    };

    this.setTitle = function(newTitle) {
        _title = newTitle;
    };
}

// Create a book instance with private properties
const bookWithPrivate1 = new BookWithPrivateProperties('1984', 'George Orwell', '1234567890');

console.log(bookWithPrivate1.displayInfo());
bookWithPrivate1.setTitle('Nineteen Eighty-Four');
console.log(bookWithPrivate1.displayInfo());

// Constructor function with public and privileged methods
function BookWithPublicAndPrivilegedMethods(title, author, isbn) {
    let _title = title;
    let _author = author;
    let _isbn = isbn;

    this.getTitle = function() {
        return _title;
    };

    this.setTitle = function(newTitle) {
        _title = newTitle;
    };

    this.displayInfo = function() {
        return `${_title} by ${_author} (ISBN: ${_isbn})`;
    };
}

// Create book instance with public and privileged methods
const bookWithPublic1 = new BookWithPublicAndPrivilegedMethods('1984', 'George Orwell', '1234567890');

console.log(bookWithPublic1.displayInfo()); // Public method
console.log(bookWithPublic1.getTitle()); // Public method
bookWithPublic1.setTitle('Nineteen Eighty-Four'); // Privileged method
console.log(bookWithPublic1.displayInfo()); // Public method

// Event listener for form submission
document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const book = new BookWithPublicAndPrivilegedMethods(title, author, isbn);

    const bookList = document.getElementById('books');
    const listItem = document.createElement('li');
    listItem.textContent = book.displayInfo();
    bookList.appendChild(listItem);

    // Clear form inputs
    document.getElementById('book-form').reset();
});
