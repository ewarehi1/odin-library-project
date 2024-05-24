const library = [];

function Book(title, author, pages, read) {
    this.name = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};

const theHobbit = new Book("The Hobbit", "J. R. R. Tolkien", 304, true);
const nineteenEightyFour = new Book("1984", "George Orwell", 328, false);
const infiniteJest = new Book("Infinite Jest", "David Foster Wallace", 1079, false);

library.push(theHobbit, nineteenEightyFour, infiniteJest);