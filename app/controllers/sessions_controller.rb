class SessionsController < ApplicationController

    skip_before_action :authorize, only: [:create, :show, :destroy]

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    def show 
        if @current_user
            render json: @current_user
        else
            render json: { message: "You must be logged in." }, status: :unauthorized
        end
    end
    
    def destroy
        session.delete :user_id
        head :no_content
    end

end
