require 'rails_helper'

describe List do

  describe '#board' do
    it 'can be used to access a list\'s board' do
      list = create(:list)

      expect(list.board).to be_a Board
    end
  end

  describe '#cards' do
    it 'can be used to access a lists cards' do
      list = create(:list_with_cards, card_count: 2)

      expect(list.cards.length).to eq(2)
    end

    it 'can be used to create a list\'s card' do
      list = create(:list)

      expect{
        list.cards.create
      }.to change(list.cards, :length).by 1
    end
  end

end
