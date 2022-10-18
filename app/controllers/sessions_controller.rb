class SessionsController < ApplicationController
include CurrentUserConcern

  def logged_in
    if @current_user
      render json: {
        logged_in: true,
        user: @current_user
      }
    else
      render json: {
        logged_in: false
      }
    end
  end
  
  def create
    user = User.find_by(username: params[:username]) 
        # || User.find_by(email: params[:session][:email].downcase)
    
    if user && user&.authenticate(params[:password])
      session[:user_id] = user.id
      # params[:session][:remember_me] == '1' ? remember(user) : forget(user)
      render json: user, status: :created      
    else
      render json: { errors: ["Invalid username or password"] },
             status: :unauthorized
    end

  end

  def logout
    reset_session
    render json: { status: 200, logged_out: true }
  end

end
