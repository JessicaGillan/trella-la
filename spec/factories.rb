
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

    factory :board_with_members do

      transient do
        members_count 0
      end

      after(:create) do |board, evaluator|
        create_list(:boards_user, evaluator.members_count, board: board)
      end

    end
  end

  factory :boards_user do
    board
    user
  end

  factory :list do
    name          'List'
    description   'I\'ve got the best lists'
    board

    factory :list_with_cards do

      transient do
        card_count 0
      end

      after(:create) do |list, evaluator|
        create_list(:card, evaluator.card_count, list: list)
      end

    end
  end

  factory :card do
    title       'Card'
    description 'A card'
    position    1
    completed   Time.now
    list

    factory :card_with_members do

      transient do
        members_count 0
      end

      after(:create) do |card, evaluator|
        create_list(:cards_user, evaluator.members_count, card: card)
      end

    end

    factory :card_with_activities do

      transient do
        activity_count 0
      end

      after(:create) do |card, evaluator|
        create_list(:activity, evaluator.activity_count, card: card)
      end

    end
  end

  factory :cards_user do
    card
    user
  end

  factory :activity do
    description   'Do something crazy'
    user
    card
  end

end
