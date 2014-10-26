class StoriesController < ApplicationController

  def new
    @story = Story.new
    @user = User.find(session[:user_id])
  end

end
