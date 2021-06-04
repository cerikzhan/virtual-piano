import { BaseComponent } from '../base-component';
import { Button } from '../button/button';
import { Piano } from '../piano/piano';

export class Main extends BaseComponent {
  constructor(parentNode) {
    super(parentNode, 'main', { class: 'main' });
    const btnContainer = new BaseComponent(this.element, 'div', { class: 'btn-container' });
    this.notesBtn = new Button(btnContainer.element, 'btn btn-notes btn-active', 'notes');
    this.lettersBtn = new Button(btnContainer.element, 'btn btn-letters', 'letters');
    this.piano = new Piano(this.element);

    this.notesBtn.onClick = () => {
      this.notesBtn.element.classList.add('btn-active');
      this.lettersBtn.element.classList.remove('btn-active');
      this.piano.getKeys().forEach((key) => {
        key.element.classList.remove('letter');
      });
    };

    this.lettersBtn.onClick = () => {
      this.lettersBtn.element.classList.add('btn-active');
      this.notesBtn.element.classList.remove('btn-active'); this.piano.getKeys().forEach((key) => {
        key.element.classList.add('letter');
      });
    };
  }
}
