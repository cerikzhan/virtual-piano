import { Header } from './components/header/header';
import { Main } from './components/main/main';

export function App(parentNode) {
  Header(parentNode);
  const main = new Main(parentNode);

  window.addEventListener('keydown', (e) => {
    const pianoKey = main.piano[e.code];
    if (pianoKey) {
      pianoKey.play();
      pianoKey.clicked = true;
    }
  });

  window.addEventListener('keyup', (e) => {
    const pianoKey = main.piano[e.code];
    if (pianoKey) {
      pianoKey.element.classList.remove('piano-key-active');
      pianoKey.clicked = false;
    }
  });
}
