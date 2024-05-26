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

function displayLibrary(obj) {
    const shelf = document.querySelector("#shelf")

    for (let book of obj) {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
        shelf.appendChild(card)

        const title = document.createElement('div')
        title.setAttribute('class', 'title')
        title.innerText = book.title
        card.appendChild(title);

        function readStatus() {
            if (book.read) {
                return "I have read this!"
            }
            return "I have not read this..."
        }

        const details = document.createElement('div')
        details.setAttribute('class', 'details')
        details.innerText = `by ${book.author}
            ${book.pages} pages
            Read status: ${readStatus()}`
        card.appendChild(details)

        const deleteBtn = document.createElement('div')
        deleteBtn.innerHTML = "<button class='delete-button'>Delete</button>"
        deleteBtn.setAttribute("class", "delete-button-container")
        card.appendChild(deleteBtn)
    }
}

displayLibrary(library);