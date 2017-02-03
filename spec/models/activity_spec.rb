require 'rails_helper'

describe Activity do
  describe '#card' do
    it 'provides access to a activity\'s card' do
      activity = create(:activity)

      expect(activity.card).to be_a Card
    end
  end

  describe '#user' do
    it 'provides access to a activity\'s user' do
      activity = create(:activity)

      expect(activity.user).to be_a User
    end
  end
end
