Rails.application.routes.draw do  
  resources :order_products
  resources :user_products
  resources :orders
  resources :products, only: [:index, :show]
  resources :users, only: [:index, :create, :update, :destroy] 
  resources :payment_infos
  resources :addresses
  resources :sessions
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
