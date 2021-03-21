import React from 'react';
import ReactDOM from 'react-dom';

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

const App = () => {
  const phonebook = {
    name: 'Superadvanced web phonebook app',
    contacts: [
    {
      name: 'John Doe',
      phonenumber: '358401234567'
    },
    { 
      name: 'Jane Doe',
      phonenumber: '44551234567'
    },
    {
      name: 'Foo bar',
      phonenumber: '000'
    },
    {
      name: 'xxx',
      phonenumber: '666'
    }
    ]
  }
  
  return (
    <div>
      <Phonebook phonebook = {phonebook} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)