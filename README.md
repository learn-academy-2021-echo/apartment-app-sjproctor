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
- Added
