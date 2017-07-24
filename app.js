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
    return React.createElement('li', {},
      React.createElement('h2', {}, this.props.name),
      React.createElement('a', {href: 'mailto: ' + this.props.email}, this.props.email),
      React.createElement('div', {}, this.props.description)
    )
  }
})

// ContactForm Component
var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },
  render: function(){
    return React.createElement('form', {},
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

var rootElement = React.createElement('div', {},
  React.createElement('h1', {}, 'Contacts'),
  React.createElement(ContactForm, {contact: newContact}),
  React.createElement('ul', {}, contactItemList)
)
ReactDOM.render(
  rootElement,
  document.getElementById('app')
);
