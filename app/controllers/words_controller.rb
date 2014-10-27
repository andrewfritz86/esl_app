class WordsController < ApplicationController

  def index
    #AJAX get requests comin' in hot, will have to to Story.find(#session[:story_id]).words and serve that up
    @words = Story.find(57).words.all
    render json: @words
  end

  def create
    # binding.pry
    #when we create a new word here, we will have to assign it the param of story_id from params or session. word.
    new_word = Word.create(word_params)
    new_word.story_id = session[:new_story_id]#may have to change this
    new_word.save
  end


  private

  def word_params
    params.require(:word).permit(:word, :definition)
  end

end
