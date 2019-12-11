100.times do
  @stuff = Stuff.create(
    name: Faker::Commerce.product_name,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price.to_f,
    department: Faker::Commerce.department
  )
  5.times do
    @stuff.reviews.create(
      body: Faker::Quotes::Shakespeare.as_you_like_it_quote,
      rating: Faker::Number.within(range: 1..5)
    )
  end
end

puts "100 Products Seeded"
puts "5 reviews per product seeded boi"