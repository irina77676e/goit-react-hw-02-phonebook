import React from 'react';
import { PropTypes } from 'prop-types';
import { Ul, Contact, Button } from './ContactList.styled';

const ContactList = ({ contacts, onRemoveContact }) => (
  <div>
    <Ul>
      {contacts.map(({ id, number, name }) => (
        <Contact key={id}>
          {name}: {number}
          <Button onClick={() => onRemoveContact(id)} type="button">
            Delete
          </Button>
        </Contact>
      ))}
    </Ul>
  </div>
);
export default ContactList;

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  removeContact: PropTypes.func,
};
