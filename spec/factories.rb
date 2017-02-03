
FactoryGirl.define do

  factory :user do
    first_name  'Test'
    last_name   'User'
    sequence(:email) { |n| "test#{n}@example.com" }
    password    'password'
  end

  factory :board do
    name    'Board'
    association :owner, factory: :user
  end

  factory :list do
    name          'List'
    description   'I\'ve got the best lists'
    board
  end

  factory :card do
    title       'Card'
    description 'A card'
    position    1
    completed   Time.now
    list
  end

  factory :activity do
    description   'Do something crazy'
    user
    card
  end

end
