import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-operations';
import {
  getFilter,
  getContacts,
} from '../../redux/phonebook/phonebook-selectors';
import PropTypes from 'prop-types';

import style from './ContactList.module.css';

const ContactList = ({ contacts, filter, onDelete }) => {
  const normalizedFilter = filter.toLowerCase();

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  const contactElement = filterContacts.map(({ name, number, id }) => (
    <li key={id} className={style.contactListItem}>
      {name}: {number}
      <span onClick={() => onDelete(id)} className={style.closeButton}>
        X
      </span>
    </li>
  ));

  return <ul className={style.contactList}>{contactElement}</ul>;
};

ContactList.defaultProps = {
  contacts: [],
  onDelete: () => {},
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};

const mapStateToProps = state => ({
  contacts: getContacts(state),
  filter: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
