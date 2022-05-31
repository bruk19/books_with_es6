export default class Router {
  constructor(route) {
    this.route = route;
    this.navigate(this.route);
  }

  navigate = (to) => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      if (section.classList.contains(to)) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    });
  }
}