class OrderProductsController < ApplicationController
    def index
        order_products = OrderProduct.all
        render json: order_products
    end

    def show
        order_product = OrderProduct.find(params[:id])
        render json: order_product, serializer: OrderProductSerializer
    end

    
    def create
        order_product = OrderProduct.create(order_product_params)
        render json: order_product, status: :created        
    end


    def update
        order_product = OrderProduct.find_by(id: params[:id])

        if order_product
            order_product.update(order_product_params)
            render json: order_product
        else
            render json: {error: "OrderProduct not found" }, status: :not_found
        end
    end


    def destroy
        order_product = OrderProduct.find_by(id: params[:id])

        if order_product
            order_product.destroy
            head :no_content
        else
            render json: {error: "OrderProduct not found" }, status: :not_found
        end
    end

    private

    def order_product_params
        params.permit(:product_id, :order_id, :quantity)
    end
end
