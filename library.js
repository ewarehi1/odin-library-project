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

        for (let prop in book) {
            const detail = document.createElement('div')
            detail.innerText = prop +': ' + book[prop]
            detail.setAttribute('class', `${prop}`)
            card.appendChild(detail)
        }

        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Delete"
        deleteBtn.setAttribute("class", "delete-button")
        card.appendChild(deleteBtn)
    }
}

displayLibrary(library);