require 'rails_helper'

describe User do
  describe '#boards' do
    it 'can be used to create and access a users boards' do
      user = create(:user)

      expect {
        user.boards.create
      }.to change(user.boards, :length).by 1
    end
  end

  describe '#owned_boards' do
    it "can be used to create and access a user's owned boards" do
      user = create(:user)

      expect {
        user.owned_boards.create
      }.to change(user.owned_boards, :length).by 1
    end
  end

  describe '#cards' do
    it "can be used to create and access a user's cards" do
      user = create(:user)

      expect{
        user.cards.create
      }.to change(user.cards, :length).by 1
    end
  end

  describe '#activities' do
    it "can be used to create and access a user's activities" do
      user = create(:user)

      expect{
        user.activities.create
      }.to change(user.activities, :length).by 1
    end
  end

end
