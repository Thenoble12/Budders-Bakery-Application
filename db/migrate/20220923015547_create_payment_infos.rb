class CreatePaymentInfos < ActiveRecord::Migration[6.1]
  def change
    create_table :payment_infos do |t|
      # t.integer :payment_info_id
      t.integer :address_id
      t.integer :card_number
      t.integer :exp_month
      t.integer :exp_year
      t.integer :cvv

      t.timestamps
    end
  end
end
