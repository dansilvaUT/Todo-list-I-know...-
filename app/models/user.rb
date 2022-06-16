class User < ApplicationRecord
    has_many :todos
    validates :first_name, :last_name, :username, :email, :password, presence: true
end
