Rails.application.routes.draw do

  namespace :api do
    resources :stuffs do
      resources :reviews
    end
  end
  
end
