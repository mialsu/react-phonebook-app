import React from 'react'

const Phonebook = (props) => {
    const { phonebook } = props;
    const contacts = phonebook.contacts
  
    return(
      <div>
        <h1>{phonebook.name}</h1>
        <p>
          {contacts.map(contact => <p><b>Name:</b> {contact.name} <b>Phone:</b> {contact.phonenumber}</p>)}
        </p>
        <p>Total number of entries: {contacts.length}</p>
      </div>
    )
  }

export default Phonebook