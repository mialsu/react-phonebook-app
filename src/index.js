import React from 'react';
import ReactDOM from 'react-dom';
import Phonebook from './components/Phonebook'

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