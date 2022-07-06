Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "static#index"

  namespace :api do
    resources :todos
    #Sessions
    post "/login", to: "sessions#create_session"
    post "/logout", to: "sessions#destroy_session"
    get "/logged_in", to: "sessions#is_logged_in?"
    #Users
    post "/users", to: "users#create_user"
    get "/users/:id", to: "users#show_user"
    #Lists
    post :create_list, to: "lists#create_list"
    put "update_list/:id", to: "lists#update_list"
    delete "destroy_list/:id", to: "lists#destroy_list"
    get :lists, to: "lists#index"
    #Todos
    get :todos, to: "todos#index"
    post :create_todo, to: "todos#create_todo"
    put "complete_todo/:id", to: "todos#complete_todo"
    delete "destroy_todo/:id", to: "todos#destroy_todo"
    put "update_todo/:id", to: "todos#update_todo"
    get "get_todos_by_list/:id", to: "todos#get_todos_by_list"

  end
end
