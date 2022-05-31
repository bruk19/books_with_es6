export default class book {
  id = new Date().getTime();

  constructor(title, author, id = null) {
    this.title = title;
    this.author = author;
    if (id !== null) {
      this.id = id;
    }
  }

  createNode = () => {
    const bookNode = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = 'Remove';

    bookNode.innerHTML = `
    <span>'${this.title}' by ${this.author}</span>`;
    bookNode.append(btn);

    return { bookNode, btn };
  }
}