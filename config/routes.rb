
Rails.application.routes.draw do

  devise_for :users
  root 'ng#index'

end
