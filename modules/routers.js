import { displayBooks, addBook, contactBook } from "./declaration.js";

export default class Router {
	allBooks = () => {
		displayBooks.classList.replace('hide', 'show');
		addBook.classList.replace('show', 'hide');
		contactBook.classList.replace('show', 'hide');
	};

	bookAdd = () => {
		addBook.classList.replace('hide', 'show');
		displayBooks.classList.replace('show', 'hide');
		contactBook.classList.replace('show', 'hide');
	};

	contactPage = () => {
		contactBook.classList.replace('hide', 'show');
		displayBooks.classList.replace('show', 'hide');
		addBook.classList.replace('show', 'hide');
	};
}