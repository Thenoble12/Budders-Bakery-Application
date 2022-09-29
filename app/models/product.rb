class Product < ApplicationRecord
    has_many :user_products 
    has_many :order_products
    has_many :users, through: :order_products
    has_many :orders, through: :order_products
end
