export class BaseComponent {
  constructor(parentNode = null, tag = 'div', attrs = {}, content = '') {
    this.element = document.createElement(tag);
    this.element.innerHTML = `${content}`;

    const keys = Object.keys(attrs);
    for (let i = 0; i < keys.length; i++) {
      const attr = keys[i];
      this.element.setAttribute(attr, attrs[attr]);
    }

    if (parentNode) {
      parentNode.appendChild(this.element);
    }
  }

  destroy() {
    this.element.remove();
  }
}
