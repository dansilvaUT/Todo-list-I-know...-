module Api
    class ListsController < ApplicationController
        before_action :logged_in_user

        def index
            @list = List.where(user_id: current_user.id)
            
            if @list
                render json: { status: 200, lists: @list }
            else
                render json: { status: 500, message: "Something went wrong" }
            end
        end

        def create_list
            @list = List.new(list_params)

            if @list.save
                render json: { status: 201, message: "List created", list: @list }
            else
                render json: { status: 500, message: "Something went wrong" }
            end
        end

        def update_list
            @list = List.find_by_id(params[:id])
            if @list.update(list_params)
                render json: { status: 200, message: "List updated successfully" }
            else
                render json: { status: 500, message: "Something went wrong" }
            end
        end

        def destroy_list
            @list = List.find_by_id(params[:id])
            if @list.destroy
                render json: { status: 200, message: "List destroyed successfully" }
            else
                render json: { status: 500, message: "Something went wrong" }
            end
        end

        private

        def list_params
            params.require(:list).permit(:name, :user_id, :id)
        end
    end
end