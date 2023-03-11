import { getVocab } from '../../api/vocabData';
import renderToDOM from '../../utils/renderToDom';

const selectLanguage = (user, vocabId) => {
  let domString = `<label for="author">Select an Author</label>
    <select class="form-control" id="author_id" required>
    <option value="">Select an Author</option>`;

  getVocab(user.uid).then((vocabArray) => {
    vocabArray.forEach((vocab) => {
      domString += `
          <option 
            value="${vocab.firebaseKey}" 
            ${vocabId === vocab.firebaseKey ? 'selected' : ''}>
              ${vocab.first_name} ${vocab.last_name}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-author', domString);
  });
};

export default selectLanguage;
