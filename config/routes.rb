Rails.application.routes.draw do

  get 'home', to: 'static_pages#home'
  root :to => 'static_pages#home'

  get 'contacts/index'
  post 'mail/send', to: 'contacts#send_mail'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
