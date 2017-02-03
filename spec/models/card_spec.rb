require 'rails_helper'

describe Card do
  describe '#list' do
    it 'provides access to a card\'s list' do
      card = create(:card)

      expect(card.list).to be_a List
    end
  end

  describe '#members' do
    it "provides access to a card's members" do
      card = create(:card_with_members, members_count: 2)

      expect(card.members.length).to eq 2
    end
  end

  describe '#activities' do
    it "provides access to a card's activities" do
      card = create(:card_with_activities, activity_count: 2)

      expect(card.activities.length).to eq 2
    end

    it "allows you to create an activity on a card" do
      card = create(:card)

      expect{
        card.activities.create
      }.to change(card.activities, :length).by 1
    end
  end
end
