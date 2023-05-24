const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    maxPages: 250,
    onPage: 120,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    maxPages: 402,
    onPage: 0,
  },
  {
    title: "Clean Code",
    author: "Robert Cecil Martin",
    maxPages: 464,
    onPage: 400,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andy Hunt and Dave Thomas",
    maxPages: 352,
    onPage: 352,
  },
];

class Book {
  constructor(title, author, maxPages, onPage) {
    this.title = title;
    this.author = author;
    this.maxPages = maxPages;
    this.onPage = onPage;
  }
}

const firstList = document.querySelector(".first-list");
const secondList = document.querySelector(".second-list");
const tbody = document.querySelector("tbody");

const form = document.querySelector("form");
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const onPageInput = document.querySelector("#on-page-input");
const maxPagesInput = document.querySelector("#max-pages-input");
const inputs = document.querySelectorAll("input");

const displayFirstList = () => {
  firstList.innerHTML = "";
  books.forEach((book) => {
    const li = document.createElement("li");
    li.innerText = `"${book.title}" by  ${book.author}.`;
    firstList.append(li);
  });
};

const displaySecondList = () => {
  secondList.innerHTML = "";
  books.forEach((book) => {
    const li = document.createElement("li");
    if (book.maxPages === book.onPage) {
      li.innerText = `You already read "${book.title}" by  ${book.author}.`;
      li.style.color = "green";
    } else {
      li.innerText = `You still need to read "${book.title}" by  ${book.author}.`;
      li.style.color = "red";
    }
    secondList.append(li);
  });
};

const displayTable = () => {
  tbody.innerHTML = "";
  books.forEach((book) => {
    const tr = document.createElement("tr");

    const title = document.createElement("td");
    title.innerText = book.title;

    const author = document.createElement("td");
    author.innerText = book.author;

    const maxPages = document.createElement("td");
    maxPages.innerText = book.maxPages;

    const onPage = document.createElement("td");
    onPage.innerText = book.onPage;

    const progressPercentage = Math.floor((book.onPage / book.maxPages) * 100);
    const progress = document.createElement("td");
    const progressBar = document.createElement("div");
    progressBar.innerText = `${progressPercentage}%`;
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.style.backgroundColor = "green";
    progressBar.style.color = "white";
    progressBar.style.textAlign = "center";
    progress.style.backgroundColor = "lightgray";
    progress.append(progressBar);

    tr.append(title, author, maxPages, onPage, progress);
    tbody.append(tr);
  });
};

displayFirstList();
displaySecondList();
displayTable();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  books.push(
    new Book(
      titleInput.value,
      authorInput.value,
      maxPagesInput.value,
      onPageInput.value
    )
  );
  inputs.forEach((input) => {
    input.value = "";
  });
  displayFirstList();
  displaySecondList();
  displayTable();
});
