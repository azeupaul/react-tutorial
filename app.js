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
  onNameChange: function(e){
    this.props.change(Object.assign({}, this.props.contact, {name: e.target.value}))
  },
  onEmailChange: function(e){
    this.props.change(Object.assign({}, this.props.contact, {email: e.target.value}))
  },
  onDescriptionChange: function(e){
    this.props.change(Object.assign({}, this.props.contact, {description: e.target.value}))
  },
  render: function(){
    return React.createElement('form', {className: 'ContactForm'},
      React.createElement('input', {
        placeholder: 'Name (required)',
        value: this.props.contact.name,
        type: 'text',
        onChange: this.onNameChange
      }),
      React.createElement('input', {
        placeholder: 'Email (required)',
        value: this.props.contact.email,
        type: 'email',
        onChange: this.onEmailChange
      }),
      React.createElement('textarea', {
        placeholder: 'Description',
        value: this.props.contact.description,
        onChange: this.onDescriptionChange
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
    onContactChange: React.PropTypes.func.isRequired
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
          change: this.props.onContactChange
        })
      )
    )
  },
})

/**
 *
 * Setting state and data
 *
*/

// The state object
var state = {}

// Initial state
setState({
  contacts: [
    {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
    {key: 2, name: "Pablo Azeu", email: "paulazeu@maildev.com"},
    {key: 3, name: "Joe Doe"},
  ],
  newContact: {name: "", email: "", description: ""},
});


// update data for the form
function updateNewContact(contact) {
  setState({ newContact: contact });
}

// Make the given changes to the state and perform any required housekeeping
function setState(changes) {
  Object.assign(state, changes);

  ReactDOM.render(
    React.createElement(ContactView, Object.assign({}, state, {
      onContactChange: updateNewContact,
    })),
    document.getElementById('app')
  );
}
