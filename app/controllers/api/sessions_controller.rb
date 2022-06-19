module Api
    class SessionsController < ApplicationController
        #TODO: Remove password key sending user info to client
        def create_session
            @user = User.find_by(username: session_params[:username])

            if @user && @user.authenticate(session_params[:password])
                login!
                render json: { logged_in: true, user: @user.attributes.except("password_digest") }
            else
                render json: { status: 401, message: "No user exists with credentials provided" }
            end

        end

        def is_logged_in?
            if logged_in && current_user
                render json: { logged_in: true, user: current_user.attributes.except("password_digest") }
            else
                render json: { logged_in: false, message: "No user logged in"}
            end
        end

        def destroy_session
            logout!
              session.clear
              render json: { status: 200, message: "User successfully logged out" }
        end

        #Private Methods
        private

        def session_params
            params.require(:session).permit(:username, :password)
        end
    end
end
