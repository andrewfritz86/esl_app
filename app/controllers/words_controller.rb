class WordsController < ApplicationController

  def index
    @words = Word.where(story_id: session[:story_id])
    render json: @words
  end

  def create
    new_word = Word.create(word_params)
    new_word.story_id = session[:story_id]#may have to change this
    new_word.save
  end

  def random
    @word = random_word
    render json: {word: @word}
  end

  def score
    #need to take each word for the story and check it against
    #each citation for the story
    binding.pry
    #@count = something
    #render json: {count: @count}
  end


  def grab_definition
    key = "64e90a58d89a8e7f3f000001fe809d0cd55d32cb45b9f117e"
    word = params["word"]["newWord"] #later this will be dynamic
    response = HTTParty.get("http://api.wordnik.com:80/v4/word.json/#{word}/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=#{key}")
    response = response[0]["text"]
    render json: {definition: response}
  end

  def word_count
    @word_count = Word.where(story_id: session[:story_id]).size
    render json: @word_count
  end

  private

  def word_params
    params.require(:word).permit(:word, :definition)
  end

end
