import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Contents = (props) => {
  const contacts = props.contacts
  return (
    <div>
      <Entry name={contacts[0].name} phone={contacts[0].phonenumber} />
      <Entry name={contacts[1].name} phone={contacts[1].phonenumber} />
      <Entry name={contacts[2].name} phone={contacts[2].phonenumber} />
    </div>
  )
}

const Entry = (props) => {

  return (
    <div>
      <p>{props.name} {props.phone}</p>
    </div>
  )
}

const App = () => {
  const title = 'Superadvanced web phonebook app'
  const contacts = [
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
    }
  ]
  
  return (
    <div>
      <Header title={title} />
      <Contents contacts = {contacts} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)