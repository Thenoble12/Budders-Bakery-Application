class OrderProductSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :order_id, :quantity

  def show
    self.id
    self.product_id
    self.order_id
    self.quantity   
  end
  
end
