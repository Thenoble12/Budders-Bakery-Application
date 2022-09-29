class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      # t.integer :product_id
      t.string :name
      t.float :price
      # t.integer :quantity
      t.boolean :vegan
      t.string :product_type
      t.text :description
      t.string :image_url

      t.timestamps
    end
  end
end
