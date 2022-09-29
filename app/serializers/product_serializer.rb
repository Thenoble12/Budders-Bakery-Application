class ProductSerializer < ActiveModel::Serializer
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
  
end
