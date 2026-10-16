// Create a Book class with title, author, and ISBN, and a Library class to add/remove books and display the catalog


class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    displayBook() {
        console.log(
            `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`
        );
    }
}


class Library {
    constructor() {
        this.books = [];
    }

    
    addBook(book) {
        this.books.push(book);
        console.log("Book added successfully.");
    }

    
    removeBook(isbn) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].isbn === isbn) {
                this.books.splice(i, 1);
                console.log("Book removed successfully.");
                return;
            }
        }

        console.log("Book not found.");
    }

    
    displayCatalog() {
        console.log("Library Catalog:");

        for (let i = 0; i < this.books.length; i++) {
            this.books[i].displayBook();
        }
    }
}



let book1 = new Book("JavaScript Basics", "John", "101");
let book2 = new Book("Learn Java", "James", "102");
let book3 = new Book("Python Guide", "David", "103");


let library = new Library();


library.addBook(book1);
library.addBook(book2);
library.addBook(book3);


library.displayCatalog();


library.removeBook("102");


library.displayCatalog();



//By Dictionary Method
// Book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


// Library class
// class Library {
//     constructor() {
//         this.books = {};
//     }

//     // Add book
//     addBook(book) {
//         this.books[book.isbn] = book;
//         console.log("Book added");
//     }

//     // Remove book
//     removeBook(isbn) {
//         if (this.books[isbn]) {
//             delete this.books[isbn];
//             console.log("Book removed");
//         } else {
//             console.log("Book not found");
//         }
//     }

//     // Display catalog
//     displayCatalog() {
//         for (let isbn in this.books) {
//             let book = this.books[isbn];

//             console.log(
//                 "Title:", book.title,
//                 "Author:", book.author,
//                 "ISBN:", book.isbn
//             );
//         }
//     }
// }


// // Create books
// let book1 = new Book("JavaScript", "John", "101");
// let book2 = new Book("Java", "James", "102");
// let book3 = new Book("Python", "David", "103");

// // Create library
// let library = new Library();

// // Add books
// library.addBook(book1);
// library.addBook(book2);
// library.addBook(book3);

// // Display catalog
// console.log("Library Catalog:");
// library.displayCatalog();

// // Remove book
// library.removeBook("102");

// // Display catalog again
// console.log("After Removing:");
// library.displayCatalog();