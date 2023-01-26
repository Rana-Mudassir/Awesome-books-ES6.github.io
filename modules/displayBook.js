export default class DisplayAllBooks {
	displayBook() {
    const section = document.getElementById('bookSection');
    section.innerHTML = '';
    for (let i = 0; i <= booksArray.length - 1; i++) { section.innerHTML += `<div id="textHeading"><div><p id="title">"${booksArray[i].title}" By </p> <p id="author">${booksArray[i].author}</p></div> <button id="remove" onclick="bookApp.removeBook(${i})">Remove</button></div>`; }
  }
}