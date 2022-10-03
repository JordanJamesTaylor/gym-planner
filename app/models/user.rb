class User < ApplicationRecord

    validates :first_name, :last_name, :username, presence: true
    
end
