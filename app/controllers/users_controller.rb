class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create]

    def index
        render json: User.all
    end

    def show
        render json: @current_user
    end

    def create
        newUser = User.create!(user_params)
        session[:user_id] = newUser.id
        render json: newUser, status: :created
    end

    def update
        render json: @current_user.update!(user_params), status: :accepted
    end

    def destroy
        userToDelete = @current_user
        userToDelete.destroy
        head :no_content 
    end

    def updateAvatar
        updatedUser = User.find_by(id: params[:id])
        updatedUser.update!(avatar: params[:avatar])
        render json: updatedUser, status: :accepted
    end
    
    private

    def user_params
        params.permit(:first_name, :last_name, :username, :password, :password_confirmation, :email, :avatar, :age, :weight, :target_weight, :height)
    end

end
