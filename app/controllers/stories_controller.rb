class StoriesController < ApplicationController

  def new
    @story = Story.new
    @user = User.find(session[:user_id])
    @snippet = Snippet.new
    #maybe we use a story create here.
    #later on, we can call snippets on the story
    #get back all it's snippets, append to dom
    #can call words to load that part of the dom
    #we can pass the story id here in that case?

  end

end
