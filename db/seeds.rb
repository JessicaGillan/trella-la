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

  u.owned_boards.create(title: 'First owned board')
  u.boards.create(title: 'I\'m a member board!')
end

generate_users(10)
generate_example_user
