const navMenu = (state = false, { type }) => {
  switch (type) {
    case 'OPEN_NAVIGATION_MENU':
      return true;
    case 'CLOSE_NAVIGATION_MENU':
      return false;
    case 'TOGGLE_NAVIGATION_MENU':
      return !state;
    default:
      return state;
  }
};

export default navMenu;
