class ProductSerializer < ActiveModel::Serializer
  include ActionView::Helpers::NumberHelper

  attributes :id, :name, :price, :vegan, :product_type, :description, :image_url

  def show
      self.id
      self.name
      self.price
      self.vegan
      self.product_type
      self.description
      self.image_url
  end
  
  def price
      number_to_currency(self.object.price)
  end

end
