class SessionsController < ApplicationController

  def create
    user = User.find_by(username: params[:username]) 
        # || User.find_by(email: params[:session][:email].downcase)
    
    if user && user&.authenticate(params[:password])
      session[:user_id] = user.id      
      render json: user, status: :created      
    else
      render json: { errors: ["Invalid username or password"] },
             status: :unauthorized
    end

  end

  def logout
    session.delete :user_id
    head :no_content
    render json: { status: 200, logged_out: true }
  end

end
