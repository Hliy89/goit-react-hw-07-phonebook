import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { fetchContactsOperations } from '../../redux/phonebook/phonebook-operations';

import style from './Phonebook.module.css';

class Phonebook extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <div className={style.phonebook}>
          <h1 className={style.title}>Phonebook</h1>
          <Form />
          <h2 className={style.contactsTitle}>Contacts</h2>
          {this.props.isLoading && (
            <h2 style={{ color: 'red' }}>Loading contacts...</h2>
          )}
          <Filter />
          <ContactList />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.phonebooks.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContactsOperations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
