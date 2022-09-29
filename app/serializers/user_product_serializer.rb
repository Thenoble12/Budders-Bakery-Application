class UserProductSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :user_id, :quantity

  def show
    self.id
    self.product_id
    self.user_id
    self.quantity
  end

end
