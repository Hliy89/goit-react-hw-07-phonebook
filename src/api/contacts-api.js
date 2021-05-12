import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

export const fetchContacts = () => {
    return axios.get('/contacts').then(response => response.data);
};

export const addContact = contact => {
    return axios.post('/contacts', contact).then(({ data }) => data);
};

export const deleteContact = contactId => {
    return axios.delete(`/contacts/${contactId}`);
};



// json-server --watch db.json

// json-server --watch db.json --port 4000


