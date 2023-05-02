import { useSelector, useDispatch } from 'react-redux';
import { remove } from 'redux/contactsSlice';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import css from './ContactList.module.css';

const ContactsList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => {
      const filter = state.filter.trim().toLowerCase();
      return state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    });



    const onDelete = id => {
        dispatch(remove(id));
      };


  return (
    <ul className={css.contacts}>
      {contacts.map(contact => (
        <ContactsItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};


export default ContactsList;