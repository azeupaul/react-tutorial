// List of contacts
var contacts = [
  {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
  {key: 2, name: "Pablo Azeu", email: "paulazeu@maildev.com"},
  {key: 3, name: "Joe Doe"},
]

// ContactItem Component
var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string,
    description: React.PropTypes.string
  },
  render: function(){
    return React.createElement('li', {className: 'ContactItem'},
      React.createElement('h2', {className: 'ContactItem-name'}, this.props.name),
      React.createElement('a', {href: 'mailto: ' + this.props.email, className: 'ContactItem-email'}, this.props.email),
      React.createElement('div', {className: 'ContactItem-description'}, this.props.description)
    )
  }
})

// ContactForm Component
var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },
  render: function(){
    return React.createElement('form', {className: 'ContactForm'},
      React.createElement('input', {placeholder: 'Name (required)', value: this.props.contact.name, type: 'text'}),
      React.createElement('input', {placeholder: 'Email (required)', value: this.props.contact.email, type: 'email'}),
      React.createElement('textarea', {placeholder: 'Description', value: this.props.contact.description}, ''),
      React.createElement('button', {type: 'Submit'}, 'Save')
    )
  }
})

var contactItemList = []

for(var i = 0; i < contacts.length; i++){
  contactItemList.push(React.createElement(ContactItem, contacts[i]))
}

var newContact = {name: "", email: "", description: ""}

var rootElement = React.createElement('div', {className: 'ContactView'},
  React.createElement('h1', {className: 'ContactView-title'}, 'Contacts'),
  React.createElement(ContactForm, {contact: newContact}),
  React.createElement('ul', {className: 'ContactView-list'}, contactItemList)
)
ReactDOM.render(
  rootElement,
  document.getElementById('app')
);
