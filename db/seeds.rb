100.times do
  Stuff.create(
    name: Faker::Commerce.stuff_name,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price.to_f,
    department: Faker::Commerce.department
  )
end

puts "100 Products Seeded"