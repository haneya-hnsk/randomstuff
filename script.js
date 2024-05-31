const incompleteBookList = document.getElementById("incompleteBookshelfList");
const completeBookList = document.getElementById("completeBookshelfList");
const addBookForm = document.getElementById("inputBook");
const searchInput = document.getElementById("searchBookTitle");
const searchBookForm = document.getElementById("searchBook");
const saveButton = document.getElementById("bookSubmit");
const completeCheckbox = document.getElementById("inputBookIsComplete");

// completeCheckbox.addEventListener('click', () => {
//   console.log(completeCheckbox.checked)
// })

let books = [];

// Load books from local storage
const loadBooks = () => {
  const booksJSON = localStorage.getItem("books");

  console.log(localStorage);

  try {
    books = booksJSON ? JSON.parse(booksJSON) : [];
  } catch (e) {
    alert("Error loading books");
  }
};

// Save books to local storage
const saveBooks = () => {
  const booksJSON = JSON.stringify(books);
  localStorage.setItem("books", booksJSON);

  console.log(localStorage);
};

// Add a book to the list
const addBook = () => {
  const title = document.getElementById("inputBookTitle").value;
  const author = document.getElementById("inputBookAuthor").value;
  const year = document.getElementById("inputBookYear").value;

  if (!title || !author || !year) {
    return alert("Please fill in all fields");
  }

  if (completeCheckbox.checked) {
    const newBook = {
      id: Date.now(),
      title,
      author,
      year,
      isComplete: true,
    };
    books.push(newBook);
    saveBooks();
  } else {
    const newBook = {
      id: Date.now(),
      title,
      author,
      year,
      isComplete: false,
    };
    books.push(newBook);
    saveBooks();
  }

  renderBooks();

  // Clear form fields
  document.getElementById("inputBookTitle").value = "";
  document.getElementById("inputBookAuthor").value = "";
  document.getElementById("inputBookYear").value = "";
};

// Render books to the page
const renderBooks = () => {
  console.log(books);

  incompleteBookList.innerHTML = "";
  completeBookList.innerHTML = "";

  completeBook = books.filter((book) => book.isComplete == true);
  inCompleteBook = books.filter((book) => book.isComplete == false);

  completeBook.forEach((book) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <h2>${book.title}</h2>
    <p>Author: ${book.author}</p>
    <p>Year: ${book.year}</p>
    <button onclick="markAsNotComplete('${book.id}')">Mark as in complete</button>
    <button onclick="removeBook('${book.id}')">Remove</button>
  `;

    completeBookList.appendChild(li);
  });

  inCompleteBook.forEach((book) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Year: ${book.year}</p>
      <button onclick="markAsComplete('${book.id}')">Mark as complete</button>
      <button onclick="removeBook('${book.id}')">Remove</button>
    `;

    incompleteBookList.appendChild(li);
  });
};

// Remove a book from the list
const removeBook = (id) => {
  books = books.filter((book) => book.id != id);
  saveBooks();
  renderBooks();
};

// Search for a book
const searchBooks = () => {
  const searchTerm = searchInput.value.toLowerCase();

  console.log(searchTerm);

  books = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm) ||
      book.year.toString().includes(searchTerm)
    );
  });

  renderBooks();
};

// Event listeners
addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addBook();
});

saveButton.addEventListener("click", saveBooks());

searchBookForm.addEventListener("submit", searchBooks());

// Load books on page load
window.addEventListener("load", loadBooks());

// Fungsi untuk menandai todo sebagai selesai
function markAsComplete(id) {
  books = books.map((book) => {
    if (book.id == id) {
      return { ...book, isComplete: true };
    }
    return book;
  });

  saveBooks();
  renderBooks();
}

// Fungsi untuk mengembalikan todo ke keadaan tidak selesai
function markAsNotComplete(id) {
  books = books.map((book) => {
    if (book.id == id) {
      return { ...book, isComplete: false };
    }
    return book;
  });

  saveBooks();
  renderBooks();
}

