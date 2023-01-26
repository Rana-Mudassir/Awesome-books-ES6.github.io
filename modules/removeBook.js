export default class RemoveBook{
	removeBook(id) {
    booksArray.splice(id, 1);
    bookApp.displayBook();
    localStorage.setItem('booksArray', JSON.stringify(booksArray));
  }
}