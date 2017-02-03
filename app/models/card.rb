
class Card < ApplicationRecord
  belongs_to :list
  has_many :cards_users
  has_many :users, through: :cards_users
  has_many :activities
end
