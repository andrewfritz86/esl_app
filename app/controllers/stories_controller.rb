class StoriesController < ApplicationController

  def new

  end

  def template
    @word_count = Word.where(story_id: session[:story_id]).size
    unless session[:story_id]

      @story = Story.create
      @story.user_id = session[:user_id]
      @story.save

      if !session[:story_id]
        session[:story_id] = @story.id
      end
    end

  end

  def index
    @stories = Story.where(user_id: session[:user_id]).all
  end

  def retrieve
    # binding.pry
    session[:story_id] = params[:previous_story_id]
  end


end
