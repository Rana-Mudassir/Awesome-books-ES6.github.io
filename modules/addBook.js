export default class AddNewBook{
	addBook() {
    const title = document.getElementById('inputTitle');
    const author = document.getElementById('inputAuthor');
    const newBook = {
      title: title.value,
      author: author.value,
    };
    booksArray.push(newBook);
    bookApp.displayBook();
    localStorage.setItem('booksArray', JSON.stringify(booksArray));
    title.value = '';
    author.value = '';
  }
}