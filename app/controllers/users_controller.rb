class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def show
        render json: User.find_by(id: params[:id])
    end

    def create
        newUser = User.create!(user_params)
        render json: newUser, status: :created
    end

    def update
        updatedUser = User.find_by(id: params[:id])
        updatedUser.update!(user_params)
        render json: updatedUser, status: :accepted
    end

    def destroy
        userToDelete = User.find_by(id: params[:id])
        userToDelete.destroy
        head :no_content 
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :username, :age, :weight, :height)
    end

end
