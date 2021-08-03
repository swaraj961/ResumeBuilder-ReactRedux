import * as ActionTypes from "./ActionTypes";

export const addContact = (contactSection) => {
  // contact section is the whole ojt of contact details

  return {
    type: ActionTypes.ADD_CONTACT,
    payload: contactSection,
  };
};

export const updateContact = (contactSection) => {
  return {
    type: ActionTypes.UPDATE_CONTACT,
    payload: contactSection,
  };
};
