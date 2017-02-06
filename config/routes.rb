
Rails.application.routes.draw do

  devise_for :users
  root 'ng#index'

  scope :api do
    scope :v1 do
      resources :boards do
        resources :lists
      end
    end
  end

end
