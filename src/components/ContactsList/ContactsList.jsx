import { deleteContact } from 'components/Redux/contacts/contacts';
import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';

const ContactsList = () => {
  const contacts = useSelector(state => state.phoneBook.contacts);
  const filter = useSelector(state => state.phoneBook.filter);

  const dispatch = useDispatch();

  const deleteContacts = id => {
    return dispatch(deleteContact(id));
  };

  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      {filtered?.length > 0 && (
        <ul className={s.contactList}>
          {filtered.map(({ id, name, number }) => (
            <li className={s.item} key={id}>
              <p className={s.text}>{name}</p>
              <p className={s.text}>{number}</p>
              <button
                className={s.btn}
                type="button"
                onClick={() => deleteContacts(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactsList;
