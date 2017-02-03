require 'rails_helper'

describe Board do

  describe '#lists' do
    it 'can be used to create and access a boards lists' do
      board = create(:board)

      expect {
        board.lists.create
      }.to change(board.lists, :length).by 1
    end
  end

  describe '#owner' do
    it 'can be used to access a boards owner' do
      board = create(:board)

      expect(board.owner).to be_a User
    end
  end

  describe '#members' do
    it 'can be used to access a boards members' do
      board = create(:board_with_members, members_count: 2)

      expect(board.members.length).to eq 2
    end
  end

end
