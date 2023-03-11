import { createVocab, getVocab, updateVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-vocab')) {
      const payload = {
        word: document.querySelector('#title').value,
        definition: document.querySelector('#description').value,
        language: document.querySelector('#vocab-id').value,
        uid: user.uid,
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      });
    }

    // // TODO: CLICK EVENT FOR EDITING A BOOK
    // if (e.target.id.includes('update-book')) {
    //   const [, firebaseKey] = e.target.id.split('--');
    //   console.warn('CLICKED UPDATE BOOK', e.target.id);
    //   console.warn(firebaseKey);
    // }
    // FIXME:ADD CLICK EVENT FOR EDITING AN AUTHOR
  });
};

export default formEvents;
