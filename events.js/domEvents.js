import { getSingleVocab } from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(user, vocabObj));
    }

    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm(user);
    }
  });
};

export default domEvents;
