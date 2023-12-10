import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contacts.reducer';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      placeholder="Search by name"  
      onChange={evt => dispatch(filterContacts(evt.target.value))}
    />
  );
};