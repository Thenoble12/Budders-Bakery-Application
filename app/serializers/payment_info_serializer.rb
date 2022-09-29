class PaymentInfoSerializer < ActiveModel::Serializer
  attributes :id, :address_id, :card_number, :exp_month, :exp_year, :cvv

  def show
    self.id
    self.address_id
    self.card_number
    self.exp_month
    self.exp_year
    self.cvv
  end

end
