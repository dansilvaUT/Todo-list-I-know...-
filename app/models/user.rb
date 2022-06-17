class User < ApplicationRecord
    has_secure_password
    has_many :todos
    validates_presence_of :first_name, :last_name, :username, :email
end
