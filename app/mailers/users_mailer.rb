class UsersMailer < ApplicationMailer

    def welcome_email
        @user = params[:user]
        @url = 'http://localhost:4000/profile'
        mail to: @user.email, subject: 'Welcome to GymApp!'
    end

end
