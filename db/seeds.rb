# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def generate_users n
  count_before = User.count
  n.times do |i|
    create_user(i)
  end

  puts "#{User.count - count_before} Users created."
end

def create_user n
  User.create({
    first_name: Faker::Name.first_name,
    last_name:  Faker::Name.last_name,
    email: "test#{n}@example.com",
    password: 'password'
  })
end

def generate_example_user
  u = User.create({
        first_name: 'Example',
        last_name:  'User',
        email: "user@example.com",
        password: 'password'
      })
end

def generate_boards_on_example_u n
  u = User.find_by_email('user@example.com')
  n.times do |i|
    u.boards.create({
      name: Faker::StarWars.planet
    })
  end

  n.times do
    u.owned_boards.create({
      name: Faker::Hipster.word
    })
  end
end

def generate_lists_on_example_u n
  u = User.find_by_email('user@example.com')
  boards = u.boards + u.owned_boards

  boards.each do |board|
    n.times do
      l = board.lists.create({
            name: Faker::Hipster.word,
            description: Faker::Hipster.paragraph
          })
      l.cards.create({
        position: 1,
        title: Faker::StarWars.character,
        description: Faker::Hipster.paragraph
      })
    end
  end
end

puts "Generating Users"
generate_users(10)
generate_example_user

puts "Generating boards"
generate_boards_on_example_u 2

puts "Generating lists"
generate_lists_on_example_u 2
