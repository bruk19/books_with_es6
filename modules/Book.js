export default class book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
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