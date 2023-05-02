import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactsList from 'components/ContactsList/ContactList';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList b />
    </div>
  );
};
export default App;
