class InventoryController < ApplicationController
    def index
    inventories = Inventory.all
        render json: inventories
    end

    def show
    inventory = Inventory.find(params[:id])
        render json: inventory, serializer: InventorySerializer
    end

    
    def create
        inventory = Inventory.create(inventory_params)
        render json: inventory, status: :created        
    end


    def update
        inventory = Inventory.find_by(id: params[:id])

        if inventory
            inventory.update(inventory_params)
            render json: inventory
        else
            render json: {error: "Inventory not found" }, status: :not_found
        end
    end


    def destroy
        inventory = Inventory.find_by(id: params[:id])

        if inventory
            inventory.destroy
            head :no_content
        else
            render json: {error: "Inventory not found" }, status: :not_found
        end
    end

    private

    def inventory_params
        params.permit()
    end
end