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

const shelf = document.querySelector("#shelf")

function displayLibrary(obj) {

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

displayLibrary(library)

function createBook() {
    const shelf = document.querySelector('#shelf')
    const dialog = document.createElement('div')
    dialog.innerHTML = '<dialog open>' +
        '<p>Greetings, one and all!</p>' +
        '<form id="add-book-form">' +
            '<label for="title">Title</label><br>' +
            '<input type="text" name="title" value="The Way of Kings"><br>' +
            '<br>' +
            '<label for="author">Author</label><br>' +
            '<input type="text" name="author" value="Brandon Sanderson"><br>' +
            '<br>' +
            '<label for="pages"># of pages</label><br>' +
            '<input type="number" name="pages" value="1258"><br>' +
            '<br>' +
            '<label for="read">Did you read this?</label><br>' +
            '<input type="radio" name="read" value="true" checked>' +
            '<label for="yes">Yes!</label>' +
            '<br>' +
            '<input type="radio" name="read" value="false">' +
            '<label for="no">Nope...</label><br>' +
            '<br>' +
            '<button type="submit" id="submit-button">Add book</button>'
        '</form>' +
        '</dialog>'
    shelf.appendChild(dialog)

    const form = document.querySelector('#add-book-form')

    async function sendData() {
        const formData = new FormData(form)
        addBookToLibrary(new Book(formData.get('title'), formData.get('author'), formData.get('pages'), formData.get('read')))
    }

    document.querySelector('#submit-button').addEventListener('click', event => {
        event.preventDefault()
        sendData()
        updateShelf()
    })
}

const addBookBtn = document.querySelector('#add-book')
addBookBtn.onclick = () => createBook()

function clearShelf() {
    const cards = document.querySelectorAll('.card')

    for ( let i = 0; i < cards.length; i++) {
        shelf.removeChild(cards[i])
    }
}

function updateShelf() {
    clearShelf()
    displayLibrary(library) 
}
