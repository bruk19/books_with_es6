import Book from './Book.js';
import { library } from './Library.js';

export class BookForm {
  constructor() {
    this.form = document.forms.bookForm;
    this.form.onsubmit = this.submit;
  }

  submit = (e) => {
    e.preventDefault();
    const title = this.form.title.value;
    const author = this.form.author.value;
    const newBook = new Book(title, author);

    library.addBook(newBook);

    this.form.title.focus();
    this.form.reset();
  }
}

export default new BookForm();