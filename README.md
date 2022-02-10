# Apartment App

Setup
- Added RSpec
- Added React to Rails app
- Added Devise
- Added Reactstrap
- Added React router
- Added Enzyme
- Routing constraints

Authorization vs Authentication

- Authentication - providing the correct credentials (username and password)
- Authorization - what you have access to with your credentials

Devise Config
- Installs
- Generate User
- Added the mailer
- config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
- config/initializers/devise.rb
```ruby
# Find this line:
config.sign_out_via = :delete
# and replace it with this:
config.sign_out_via = :get
```

Apartments and Users
- Added Apartment resource
- User has_many apartments and Apartment belongs_to User

Mock Data
- Added seed data to Rails app
- Added mock apartments to React app
- Added mock pic file for Enzyme

Testing in a React in Rails App
- $ yarn add jest
- $ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
- Add to the bottom of package.json
```javascript
"jest": {
  "roots": [
    "app/javascript/components"
  ]
}
```

Story: nav
- Added Routing to Home and Index in React
- Added picture and styling to Home
- Added test coverage to Home
- Added logo and styling to Header
- Added test coverage Header

Story: index
- Passed mock data into the ApartmentIndex component
- Styled cards and added Font Awesome icons
- Added test coverage to ApartmentIndex

Added Font Awesome Icons
- $ yarn add @fortawesome/fontawesome-svg-core
- $ yarn add @fortawesome/free-solid-svg-icons
- $ yarn add @fortawesome/react-fontawesome
- `import { faHome, faCity } from "@fortawesome/free-solid-svg-icons"`
- `import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"`
- In JSX: <FontAwesomeIcon icon={faHome} />
- In JSX: <FontAwesomeIcon icon={faCity} />
