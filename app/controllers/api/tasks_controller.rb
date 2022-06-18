module Api
    class TasksController < ApplicationController
        # before_action :authorized_user?

        def index
            @task = Task.all
            render json: { status: 200, message: "Todos found", todos: @task }
        end

        def create_task
            @task = Task.new(task_params)
            if @task.save
                render json: { status: 200, message: "Todo created successfully", todo: @task }
            else
                render json: { status: 500, message: "Something went wrong" }
            end
        end

        #private methods
        private

        def task_params
            params.require(:task).permit(:title, :description, :due_date, :completed, :user_id, :id)
        end
    end
end