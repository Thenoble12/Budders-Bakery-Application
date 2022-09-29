class AddressesController < ApplicationController
    def index
        addresses = Address.all
        render json: addresses
    end

    def show
        address = Address.find(params[:id])
        render json: address, serializer: AddressSerializer
    end

    
    def create
        address = Address.create(address_params)
        render json: address, status: :created        
    end


    def update
        address = Address.find_by(id: params[:id])

        if address
            address.update(address_params)
            render json: address
        else
            render json: {error: "Address not found" }, status: :not_found
        end
    end


    def destroy
        address = Address.find_by(id: params[:id])

        if address
            address.destroy
            head :no_content
        else
            render json: {error: "Address not found" }, status: :not_found
        end
    end

    private

    def address_params
        params.permit(:line_1, :line_2, :city, :postal_code, :state)
    end
end