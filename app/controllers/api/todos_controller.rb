module Api
    class TodosController < ApplicationController

        def create_todo
            @todo = Todo.new(todo_params)

            if @todo.save
                render json: { status: 200, message: "Todo created successfully", todo: @todo }
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