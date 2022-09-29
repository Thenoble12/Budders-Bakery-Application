class PaymentInfosController < ApplicationController
    def index
        payment_infos = PaymentInfos.all
        render json: payment_infos
    end

    def show
        payment_info = PaymentInfos.find(params[:id])
        render json: payment_info, serializer: PaymentInfosSerializer
    end

    
    def create
        payment_info = PaymentInfos.create(payment_info_params)
        render json: payment_info, status: :created        
    end


    def update
        payment_info = PaymentInfos.find_by(id: params[:id])

        if payment_info
            payment_info.update(payment_info_params)
            render json: payment_info
        else
            render json: {error: "PaymentInfos not found" }, status: :not_found
        end
    end


    def destroy
        payment_info = PaymentInfos.find_by(id: params[:id])

        if payment_info
            payment_info.destroy
            head :no_content
        else
            render json: {error: "PaymentInfos not found" }, status: :not_found
        end
    end

    private

    def payment_info_params
        params.permit(:address_id, :card_number, :exp_month, :exp_year, :cvv)
    end
end