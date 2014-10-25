class SessionsController < ApplicationController

  def new
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

  def create
  user = User.find_by(email: params[:email])
  user = user.authenticate(params[:password]) if user
    if user
      session[:user_id] = user.id
      session[:user_email] = user.email
      redirect_to(user_path(user))
    else
      flash[:error] = "Sorry! Your password or username is wrong. Please try again!"
      #need to set up rack-flash
      redirect_to(root_path)
    end
  end
end

