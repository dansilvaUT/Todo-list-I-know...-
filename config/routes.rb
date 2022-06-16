Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "static#index"

  namespace :api do
    #Todos
    post :create_todo, to: "todos#create_todo"
  end
end
