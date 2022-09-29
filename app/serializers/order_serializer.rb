class OrderSerializer < ActiveModel::Serializer
  attributes :id, :payment_info_id, :shipping_address_id, :payment_verified, :shipment_started

  def show
        
  end

end
