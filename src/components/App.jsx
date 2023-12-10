import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { addContact } from '../redux/contacts/contacts.reducer';
import { deleteContact } from '../redux/contacts/contacts.reducer';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../redux/contacts/contacts.reducer';

export const App = () => {
   const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactsStore.contacts);
    const filter = useSelector(state => state.contactsStore.filter);

  const handleAddContact = (name, number, resetForm) => {

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`A contact with the name "${name}" already exists.`);
      return;
    }

    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

     dispatch(addContact(newContact));
    resetForm(); 
  };

   const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = evt => {
    dispatch(filterContacts(contacts));
  };

  const getFilteredContacts = () => {
   return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={handleAddContact} />

        <h2>Contacts</h2>
        <Filter
          filter={filter}
          handleFilterChange={handleFilterChange}
        />
        <ContactList
          contacts={getFilteredContacts()}
          handleDeleteContact={handleDeleteContact}
        />
      </div>
    );
}