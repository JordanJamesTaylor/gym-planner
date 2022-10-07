Rails.application.routes.draw do
  resources :exercises
  resources :quotes
  resources :users
  
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  
end
