import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectLanguage from './selectLang';

const addVocabForm = (user, obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-book--${obj.firebaseKey}` : 'submit-book'}" class="mb-4">
      <div class="form-group">
        <label for="title">Vocab Word</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Vocabulary Word" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Definition</label>
        <textarea class="form-control" placeholder="Word Definition" id="description" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <label for="vocab">Select a Language</label>
      <select class="form-control" id="vocab-id" required>
      <option>Select a Language</option>
      <option>HTML</option>
      <option>CSS</option>
      <option>JavaScript</option>
      </select>
      <button type="submit" class="btn btn-primary">Submit Book
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectLanguage(user, `${obj.vocab_id || ''}`);
};

export default addVocabForm;
