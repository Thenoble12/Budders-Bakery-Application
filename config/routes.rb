Rails.application.routes.draw do
  
  get 'sessions/create'
  get 'sessions/destroy'
  resources :order_products
  resources :user_products
  resources :orders
  resources :products, only: [:index, :show]
  resources :users
  resources :payment_infos
  resources :addresses
  resources :sessions
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get '/register', to: 'users#create'
  get '/sessions', to: 'sessions#create'
end
