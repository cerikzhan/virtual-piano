import { BaseComponent } from '../base-component';

export class PianoKey extends BaseComponent {
  constructor(parentNode, cls, letter, note, audioSrc) {
    super(parentNode, 'div', { class: cls, 'data-letter': letter, 'data-note': note });
    this.audio = new BaseComponent(document.body, 'audio', { 'data-letter': letter, src: audioSrc });
    this.clicked = false;
    this.mouseDown = false;

    this.element.onmousedown = () => {
      this.play();
    };

    this.element.onmouseup = () => {
      this.element.classList.remove('piano-key-active');
    };

    this.element.onmouseenter = () => {
      if (this.mouseDown) {
        this.play();
      }
    };

    this.element.onmouseleave = () => {
      this.element.classList.remove('piano-key-active');
    };
  }

  play() {
    if (this.clicked) return;
    this.audio.element.currentTime = 0;
    this.audio.element.play();
    this.element.classList.add('piano-key-active');
  }
}
