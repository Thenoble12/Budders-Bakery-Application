class OrderProduct < ApplicationRecord
    belongs_to :product
    belongs_to :order

    def show
        self.product
        self.order
    end

end
