const library = [
    new Book("The Hobbit", "J. R. R. Tolkien", 304, true),
    new Book("1984", "George Orwell", 328, false),
    new Book("Infinite Jest", "David Foster Wallace", 1079, false),
    new Book("The Gunslinger", "Stephen King", 251, true)
];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};

function addBookToLibrary(book) {
    library.push(book)
}

function removeBook(title) {
    for (let book of library) {
        if (book.title == title) {
            let index = library.indexOf(book)
            library.splice(index, 1)
        }
    }
}
