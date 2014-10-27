class StoriesController < ApplicationController

  def new
    #maybe we use a story create here.
    #later on, we can call snippets on the story
    #get back all it's snippets, append to dom
    #can call words to load that part of the dom
    #we can pass the story id here in that case?
  end

  def template
    #probably should create a new story here
    @story = Story.create
    if params[:previous_story_id]
    binding.pry
      session[:story_id] = params[:previous_story_id]
    end

    if !session[:story_id] && !params[:previous_story_id]
      session[:story_id] = @story.id
    end
  end

  def index
    @user_id = session[:user_id]
    @stories = Story.where(user_id: @user_id).all
  end


end
