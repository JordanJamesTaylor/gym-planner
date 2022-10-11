class User < ApplicationRecord

    has_secure_password
    has_one_attached :avatar

    validates :first_name, :last_name, :username, :password, presence: true
    validates :username, :email, uniqueness: true

end
