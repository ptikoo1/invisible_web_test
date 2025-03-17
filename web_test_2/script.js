document.getElementById('add-book-btn').addEventListener('click', addBook);

function addBook() {
    const title = prompt("Enter the book's title:");
    const author = prompt("Enter the book's author:");
    const description = prompt("Enter the book's description:");

    if (title && author && description) {
        const bookList = document.getElementById('book-list');
        const bookCard = createBookCard(title, author, description);
        bookList.appendChild(bookCard);
    }
}

function createBookCard(title, author, description) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    bookCard.appendChild(titleElement);

    const authorElement = document.createElement('h3');
    authorElement.textContent = "By " + author;
    bookCard.appendChild(authorElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    bookCard.appendChild(descriptionElement);

    return bookCard;
}
