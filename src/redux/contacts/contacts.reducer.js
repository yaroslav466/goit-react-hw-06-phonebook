import { createSlice } from '@reduxjs/toolkit';

const exampleContacts = [
  { id: 'id-1', name: 'Joe', number: '+1-800-375-5283' },
  { id: 'id-2', name: 'Naruhito', number: '+81-354-74-97-70' },
  { id: 'id-3', name: 'Frankr', number: '+49-30-28-88-71-28' },
  { id: 'id-4', name: 'Rishi', number: ' +44-0-131-556-0023' },
  { id: 'id-5', name: 'Hermione', number: '245-91-54' },
  { id: 'id-6', name: 'Ron', number: '227-91-73' },
  { id: 'id-7', name: 'Draco', number: '227-91-11' },
  { id: 'id-8', name: 'Hagrid', number: '227-91-26' },
];

const initialState = {
  contacts: exampleContacts,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      state.contacts = [...state.contacts, payload];
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const {
  addContact,
  deleteContact,
  filterContacts,
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;