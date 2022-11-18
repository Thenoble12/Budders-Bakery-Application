class UserProductSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :user_cart

  def show
    self.user_cart
  end  

end
