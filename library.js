const library = [
    new Book("The Hobbit", "J. R. R. Tolkien", 304, true),
    new Book("1984", "George Orwell", 328, false)
];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};

// const theHobbit = new Book("The Hobbit", "J. R. R. Tolkien", 304, true);
// const nineteenEightyFour = new Book("1984", "George Orwell", 328, false);

// library.push(theHobbit, nineteenEightyFour);

function addBookToLibrary(book) {
    library.push(book)
}

const infiniteJest = new Book("Infinite Jest", "David Foster Wallace", 1079, false);

addBookToLibrary(infiniteJest);

addBookToLibrary(new Book("The Gunslinger", "Stephen King", 251, true));

function removeBook(title) {
    for (let book of library) {
        if (book.title == title) {
            let index = library.indexOf(book)
            library.splice(index, 1)
        }
    }
}

