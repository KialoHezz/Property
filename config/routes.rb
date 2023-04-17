Rails.application.routes.draw do
  devise_for :accounts
  devise_scope :account do
    get '/accounts/sign_out' => 'devise/sessions#destroy'
  end
  resources :properties
  # customized route dashboard
  get "/dashboard" => 'dashboard#index', as: :dashboard
  # customize for a profile
  get "/profile/:id" => 'dashboard#profile', as: :profile

  get 'dashboard/properties'
  get 'dashboard/reports'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root to: 'public#main'
end
