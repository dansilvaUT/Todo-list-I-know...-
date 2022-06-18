module Api
    class TodosController < ApplicationController
        before_action :authorized_user?

        def index
            @todo = Todo.all
            if !@todo.empty?
                render json: { status: 200, message: "Todos found", todos: @todo }
            else
                render json: { status: 404,  message: "Todos not found" }
            end
        end

        def create_todo
            @todo = Todo.new(todo_params)
            if @todo.save
                render json: { status: 200, message: "Todo created successfully", todo: @todo }
            else
                render json: { status: 500, message: "Something went wrong" }
            end
        end

        def complete_todo
            @todo = Todo.find_by_id(params[:id])

            if @todo.update(completed: true)
                render json: { status: 200, message: "Todo completed successfully" }
            else
                render json: { status: 500, message: "Something went wrong" }
            end
        end

        def update_todo
            @todo = Todo.find_by_id(params[:id])

            if @todo.update(todo_params)
                render json: { status: 200, message: "Todo updated successfully" }
            else
                render json: { status: 500, message: "Something went wrong" }
            end
        end

        def destroy_todo
            @todo = Todo.find_by_id(params[:id])
            if @todo.destroy
                render json: { status: 200, message: "Todo deleted successfully" }
            else
                render json: { status: 500, message: "Something went wrong" }
            end
        end
        #private methods
        private

        def todo_params
            params.require(:todo).permit(:title, :description, :due_date, :completed, :user_id, :id)
        end
    end
end