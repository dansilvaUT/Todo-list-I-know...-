module Api
    class UsersController < ApplicationController

        def create_user
            @user = User.new(user_params)
          
            if @user.save
                render json: { status: 201, message: "User created successfully", user: @user }
            else
                render json: { status: 500, message: "Something went wrong" }
            end
        end
        
        def show_user
            @user = User.find_by_id params[:id]

            if @user
                render json: { status: 200, message: "User found", user: @user } 
            else
                render json: { status: 404, message: "User not found" }
            end
        end

        #Private methods
        private
        def user_params
            params.require(:user).permit(:email, :password, :first_name, :last_name, :username)
        end
    end
end

