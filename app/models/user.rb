
class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :activities
  has_many :owned_boards, class_name: 'Board'
  has_many :boards_users
  has_many :boards, through: :boards_users
  has_many :cards_users
  has_many :cards, through: :cards_users
end
