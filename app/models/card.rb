
class Card < ApplicationRecord
  belongs_to :list
  has_many :cards_users
  has_many :members, through: :cards_users, source: :user
  has_many :activities
end
