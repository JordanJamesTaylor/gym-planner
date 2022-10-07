class SessionsController < ApplicationController

    skip_before_action :authorize, only: [:create, :show, :destroy]

    def create
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end
    
    def destroy
        session.delete :user_id
        head :no_content
    end

end
