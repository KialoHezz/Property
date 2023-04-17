# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...



  <link rel="apple-touch-icon" size="180x180" href="<%= assest_url "apple-touch-icon.png" %>">
  <link rel="icon" type="image/png" size="32x32" href="<%= assest_url "favicon-32x32.png"%>" >
  <link rel="icon" type="image/png" size="16x16" href="<%= assest_url "favicon-16x16.png"%>" >
  <link rel="manifest" href="<%= assest_url "site.webmanifest"%>" >

show the flash messages
  yarn add toostr


Add A column whether user is selling / renting the property
rails g migration add_for_sale_to_properties for_sale:boolean => check the intention for a particulalr agent
