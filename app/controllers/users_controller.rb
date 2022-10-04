class UsersController < ApplicationController
    def index
        users = User.all
        render json:  users
    end

    def show
        user = User.find(params[:id])
        render json: user, serializer: UserSerializer
    end

    
    def create
        user = User.create(user_params)
        render json: user, status: :created        
    end


    def update
        user = User.find_by(id: params[:id])

        if user
            user.update(user_params)
            render json: user
        else
            render json: {error: "User not found" }, status: :not_found
        end
    end


    def destroy
        user = User.find_by(id: params[:id])

        if user
            user.destroy
            head :no_content
        else
            render json: {error: "User not found" }, status: :not_found
        end
    end

    private

    def user_params
        params.permit(:username, :password, :email, :first_name, :last_name)
    end
end
