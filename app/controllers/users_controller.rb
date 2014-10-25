class UsersController < ApplicationController



  def new
    @user = User.new
  end

  def create
    new_user = User.create(user_params)
    session[:user_id] = new_user.id
    redirect_to user_path(new_user)
  end

  def show
    @user = User.find(session[:user_id])
  end


  private

  def user_params
    params.require(:user).permit(:password, :name, :country, :email)
  end

end
