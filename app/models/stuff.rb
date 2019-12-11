class Stuff < ApplicationRecord
  has_many :reviews, dependent: :destroy
end
