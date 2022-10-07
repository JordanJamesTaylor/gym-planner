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
        render json: newUser, status: :created
    end

    def update
        updatedUser = @current_user
        updatedUser.update!(user_params)
        render json: updatedUser, status: :accepted
    end

    def destroy
        userToDelete = @current_user
        userToDelete.destroy
        head :no_content 
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :username, :password, :email, :age, :weight, :height)
    end

end
