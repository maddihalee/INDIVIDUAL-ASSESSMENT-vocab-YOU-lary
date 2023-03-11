import { getVocab } from '../api/vocabData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events.js/domEvents';
import { showVocab } from '../pages/vocab';
import formEvents from '../events.js/formEvents';
// import navigationEvents from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  // navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put all books on the DOM on App load
  getVocab(user.uid).then((vocab) => showVocab(vocab));
};

export default startApp;
