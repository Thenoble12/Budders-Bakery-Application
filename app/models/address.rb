class Address < ApplicationRecord
    belongs_to :user
    belongs_to :payment_info
end
