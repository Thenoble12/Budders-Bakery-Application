class AddressSerializer < ActiveModel::Serializer
  attributes :id, :line_1, :line_2, :city, :postal_code, :state

  def show
    self.id
    self.line_1
    self.line_2
    self.city
    self.postal_code
    self.state  
  end

end
