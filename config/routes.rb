Rails.application.routes.draw do

  namespace :api do
    resources :stuffs do
      resource :reviews
    end
  end
  
end
