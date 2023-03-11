import { getSingleVocab, getVocab } from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import { showVocab } from '../pages/vocab';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(user, vocabObj));
    }

    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm(user);
    }

    if (e.target.id.includes('viewall')) {
      getVocab(user.uid).then((vocab) => showVocab(vocab));
    }
  });
};

export default domEvents;
