Rails.application.routes.draw do
  root to: 'home#index'
  namespace :ajax do
    get :item_autocomplete
  end
end
