module Api
    class SessionsController < ApplicationController

        def create
            @user = User.find_by(email: params[:email])

            if @user && @user.authenticate(params[:password])
                render json: { status: 200, message: "Login successful", user: @user }
            else
                render json: { status: 500, message: "Login failed" }
            end
        end
        
        def destroy
        end
    end
end
