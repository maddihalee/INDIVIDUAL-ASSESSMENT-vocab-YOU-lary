import { getVocab, htmlVocab } from '../api/getVocab';
import { showVocab } from '../pages/vocab';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('all')) {
      getVocab().then(showVocab);
    }

    if (e.target.id.includes('html')) {
      htmlVocab();
    }
  });
};

export default domEvents;
