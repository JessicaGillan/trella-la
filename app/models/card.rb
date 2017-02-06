
class Card < ApplicationRecord
  belongs_to :list
  has_many :cards_users, dependent: :destroy
  has_many :members, through: :cards_users, source: :user
  has_many :activities, dependent: :destroy
end
