class CreateUserProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :user_products do |t|
      # t.integer :user_product_id
      t.integer :product_id
      t.integer :user_id
      t.json :user_cart

      t.timestamps
    end
  end
end
