class Task < ApplicationRecord
  belongs_to :user
  has_one :user
  validates :title, :description, presence: true
end
