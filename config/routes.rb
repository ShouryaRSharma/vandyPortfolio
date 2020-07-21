Rails.application.routes.draw do

  get 'home', to: 'static_pages#home'
  root :to => 'static_pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
