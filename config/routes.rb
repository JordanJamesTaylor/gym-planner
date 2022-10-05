Rails.application.routes.draw do
  resources :exercises
  resources :quotes
  
  resources :users
  
end
