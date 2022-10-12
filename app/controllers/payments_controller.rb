class PaymentsController < ApplicationController
    def index
        payments = Payment.all
        render json: payments
    end

    def show
        payment = Payment.find(params[:id])
        render json: payment, serializer: PaymentSerializer
    end

    
    def create
        payment = Payment.create(payment_params)
        render json: payment, status: :created        
    end
end
