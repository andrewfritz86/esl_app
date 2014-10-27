class StoriesController < ApplicationController

  def new

  end

  def template
    #probably should create a new story here
    #need to add logic to only create a new story when needed
    #is there rails logic where we can see where we came from?
    @story = Story.create
    @story.user_id = session[:user_id]
    @story.save

    ##sessions below
    # if params[:previous_story_id]
    #   session[:story_id] = params[:previous_story_id]
    #   #when someone wants to grab a previous story, that id will be sent over from the link_helper via params
    #   #this only fires when someone clicks a link helper, because there won't be params otherwise
    # end

    if !session[:story_id] #&& !params[:previous_story_id]
      session[:story_id] = @story.id
      ##this is for new stories, however the logic is off, maybe should be an or statement
    end
  end

  def index
    @stories = Story.where(user_id: session[:user_id]).all
  end

  def retrieve
    binding.pry
    session[:story_id] = params[:previous_story_id]
  end


end
