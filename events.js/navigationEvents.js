import { signOut } from '../utils/auth';

const navigationEvents = () => {
  document.querySelector('#logout-button').addEventListener('click', signOut);
};

export default navigationEvents;
