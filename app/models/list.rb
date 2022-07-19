class List < ApplicationRecord
  belongs_to :user
  has_many :todos

  def get_size
    @list
  end
end
