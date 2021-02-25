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

  return (
    <div>
      <Entry name={props.name1} phone={props.phone1} />
      <Entry name={props.name2} phone={props.phone2} />
      <Entry name={props.name3} phone={props.phone3} />
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
      <Contents
        name1={contacts[0].name} phone1={contacts[0].phonenumber}
        name2={contacts[1].name} phone2={contacts[1].phonenumber}
        name3={contacts[2].name} phone3={contacts[2].phonenumber}
      />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)