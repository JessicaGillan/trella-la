
Rails.application.routes.draw do

  devise_for :users
  root 'ng#index'

  scope :api do
    scope :v1 do
      resources :boards do
        resources :lists do
          resources :cards
        end
      end
    end
  end

end
