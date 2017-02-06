
class Board < ApplicationRecord
  has_many :lists, dependent: :destroy
  belongs_to :owner, foreign_key: 'user_id', class_name: 'User'

  has_many :boards_users, dependent: :destroy
  has_many :members, through: :boards_users, source: :user
end
