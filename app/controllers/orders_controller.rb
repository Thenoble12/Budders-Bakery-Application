class OrdersController < ApplicationController
    def index
        orders = Order.all
        render json: orders
    end

    def show
        order = Order.find(params[:id])
        render json: order, serializer: OrderSerializer
    end

    
    def create
        order = Order.create(order_params)
        render json: order, status: :created        
    end


    def update
        order = Order.find_by(id: params[:id])

        if order
            order.update(order_params)
            render json: order
        else
            render json: {error: "Order not found" }, status: :not_found
        end
    end


    def destroy
        order = Order.find_by(id: params[:id])

        if order
            order.destroy
            head :no_content
        else
            render json: {error: "Order not found" }, status: :not_found
        end
    end

    private

    def order_params
        params.permit(:payment_info_id, :shipping_address_id, :payment_verified, :shipment_started)
    end
end
