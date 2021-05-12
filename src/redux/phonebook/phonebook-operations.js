import axios from 'axios';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
} from './phonebook-actions';

axios.defaults.baseURL = 'http://localhost:4000';


export const fetchContactsOperations = () => async dispatch => {
    dispatch(fetchContactsRequest());

    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactsSuccess(data));
    } catch (error) {
        dispatch(fetchContactsError(error));
    };   
}


export const addContact = (name, number) => dispatch => {
    const contact = { name, number, completed: false };

    dispatch(addContactRequest());

    axios
        .post('/contacts', contact)
        .then(({ data }) => {
            console.log(data);
            dispatch(addContactSuccess(data))
        })
        .catch(error => dispatch(addContactError(error)));
};


export const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactError(error)));
};



// axios
    //     .get('/contacts')
    //     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    //     .catch(error => dispatch(fetchContactsError(error)));