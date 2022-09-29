class UserProductsController < ApplicationController
    def index
        user_products = UserProduct.all
        render json:  user_products
    end

    def show
        user_product = UserProduct.find(params[:id])
        render json: user_product, serializer: UserProductSerializer
    end

    
    def create
        user_product = UserProduct.create(user_product_params)
        render json: user_product, status: :created        
    end


    def update
        user_product = UserProduct.find_by(id: params[:id])

        if user_product
            user_product.update(user_product_params)
            render json: user_product
        else
            render json: {error: "UserProduct not found" }, status: :not_found
        end
    end


    def destroy
        user_product = UserProduct.find_by(id: params[:id])

        if user_product
            user_product.destroy
            head :no_content
        else
            render json: {error: "UserProduct not found" }, status: :not_found
        end
    end

    private

    def user_product_params
        params.permit(:product_id, :user_id, :quantity)
    end
end
