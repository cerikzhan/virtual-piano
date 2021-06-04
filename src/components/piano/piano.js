import { BaseComponent } from '../base-component';
import { PianoKey } from '../piano-key/piano-key';

import aSound from '../../assets/audio/a.mp3';
import aHashSound from '../../assets/audio/a♯.mp3';
import bSound from '../../assets/audio/b.mp3';
import cSound from '../../assets/audio/c.mp3';
import cHashSound from '../../assets/audio/c♯.mp3';
import dSound from '../../assets/audio/d.mp3';
import dHashSound from '../../assets/audio/d♯.mp3';
import eSound from '../../assets/audio/e.mp3';
import fSound from '../../assets/audio/f.mp3';
import fHashSound from '../../assets/audio/f♯.mp3';
import gSound from '../../assets/audio/g.mp3';
import gHashSound from '../../assets/audio/g♯.mp3';

export class Piano extends BaseComponent {
  constructor(parentNode) {
    super(parentNode, 'div', { class: 'piano' });
    this.KeyD = new PianoKey(this.element, 'piano-key', 'D', 'c', cSound);
    this.KeyF = new PianoKey(this.element, 'piano-key', 'F', 'd', dSound);
    this.KeyG = new PianoKey(this.element, 'piano-key', 'G', 'e', eSound);
    this.KeyH = new PianoKey(this.element, 'piano-key', 'H', 'f', fSound);
    this.KeyJ = new PianoKey(this.element, 'piano-key', 'J', 'g', gSound);
    this.KeyK = new PianoKey(this.element, 'piano-key', 'K', 'a', aSound);
    this.KeyL = new PianoKey(this.element, 'piano-key', 'L', 'b', bSound);
    const sharpContainer = new BaseComponent(this.element, 'div', { class: 'keys-sharp' });
    this.KeyR = new PianoKey(sharpContainer.element, 'piano-key sharp', 'R', 'c♯', cHashSound);
    this.KeyT = new PianoKey(sharpContainer.element, 'piano-key sharp', 'T', 'd♯', dHashSound);
    this.KeyEmpty = new BaseComponent(sharpContainer.element, 'div', { class: 'piano-key sharp none' });
    this.KeyU = new PianoKey(sharpContainer.element, 'piano-key sharp', 'U', 'f♯', fHashSound);
    this.KeyI = new PianoKey(sharpContainer.element, 'piano-key sharp', 'I', 'g♯', gHashSound);
    this.KeyO = new PianoKey(sharpContainer.element, 'piano-key sharp', 'O', 'a♯', aHashSound);

    this.element.onmousedown = () => {
      this.getKeys().forEach((key) => {
        key.mouseDown = true;
      });
    };

    document.body.onmouseup = () => {
      this.getKeys().forEach((key) => {
        key.mouseDown = false;
      });
    };

    document.body.onmouseleave = () => {
      this.getKeys().forEach((key) => {
        key.mouseDown = false;
      });
    };
  }

  getKeys() {
    return [
      this.KeyD, this.KeyF, this.KeyG, this.KeyH,
      this.KeyJ, this.KeyK, this.KeyL, this.KeyR,
      this.KeyT, this.KeyU, this.KeyI, this.KeyO,
    ];
  }
}
