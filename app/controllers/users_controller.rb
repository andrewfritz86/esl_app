class UsersController < ApplicationController



  def new
    @user = User.new
  end

  def create
    new_user = User.create(user_params)
    session[:user_id] = new_user.id
    binding.pry
    redirect_to user_path(new_user)
  end

  def show
    session[:story_id] = nil
    @user = User.find(session[:user_id])
  end

  def index
    redirect_to root_path
  end


  private

  def user_params
    params.require(:user).permit(:password, :name, :country, :email)
  end

end
