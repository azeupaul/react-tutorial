// ContactItem Component
var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
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
    contact: React.PropTypes.object.isRequired,
    change: React.PropTypes.func.isRequired
  },
  render: function(){
    var oldObject = this.props.contact
    var change = this.props.change
    return React.createElement('form', {className: 'ContactForm'},
      React.createElement('input', {
        placeholder: 'Name (required)',
        value: this.props.contact.name,
        type: 'text',
        onChange: function(e){
          change(Object.assign({}, oldObject, {name: e.target.value}))
        }
      }),
      React.createElement('input', {
        placeholder: 'Email (required)',
        value: this.props.contact.email,
        type: 'email',
        onChange: function(e){
          change(Object.assign({}, oldObject, {email: e.target.value}))
        }
      }),
      React.createElement('textarea', {
        placeholder: 'Description',
        value: this.props.contact.description,
        onChange: function(e){
          change(Object.assign({}, oldObject, {description: e.target.value}))
        }
      }, ''),
      React.createElement('button', {
        type: 'Submit'
      }, 'Save')
    )
  }
})

// ContactView for embedding form and listview
var ContactView = React.createClass({
  propTypes: {
    contacts: React.PropTypes.array.isRequired,
    newContact: React.PropTypes.object.isRequired,
  },

  render: function() {
    var contactItemElements = this.props.contacts
      .filter(function(contact) { return contact.email })
      .map(function(contact) { return React.createElement(ContactItem, contact) })

    return (
      React.createElement('div', {className: 'ContactView'},
        React.createElement('h1', {className: 'ContactView-title'}, "Contacts"),
        React.createElement('ul', {className: 'ContactView-list'}, contactItemElements),
        React.createElement(ContactForm, {
          contact: this.props.newContact,
          change: function(contact){
            console.log(contact)
          }
        })
      )
    )
  },
})

/**
 *
 * Data for testing app
 *
*/

// List of contacts
var contacts = [
  {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
  {key: 2, name: "Pablo Azeu", email: "paulazeu@maildev.com"},
  {key: 3, name: "Joe Doe"},
]

var newContact = {name: "", email: "", description: ""}

ReactDOM.render(
  React.createElement(ContactView, {
    contacts: contacts,
    newContact: newContact
  }),
  document.getElementById('app')
);
