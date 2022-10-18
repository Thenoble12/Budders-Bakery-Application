class User < ApplicationRecord
    has_many :payment_infos
    has_many :addresses
    has_many :orders
    has_many :user_products
    has_many :order_products, through: :orders
    has_secure_password
end
