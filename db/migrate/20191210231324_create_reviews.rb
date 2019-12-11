class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :body
      t.integer :rating
      t.belongs_to :stuff, null: false, foreign_key: true

      t.timestamps
    end
  end
end
