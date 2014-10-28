class WordsController < ApplicationController

  def index
    #AJAX get requests comin' in hot, will have to to Story.find(#session[:story_id]).words and serve that up
    @words = Word.where(story_id: session[:story_id])
    # binding.pry
    render json: @words
  end

  def create
    # binding.pry
    #when we create a new word here, we will have to assign it the param of story_id from params or session. word.
    new_word = Word.create(word_params)
    new_word.story_id = session[:story_id]#may have to change this
    new_word.save
  end

  def random
    @word = random_word
    render json: {word: @word}
  end

  # def definition

  #   word_array = [
  #     {"word" => "duck", "definition" => "goes quack"},
  #     {"word" =>  "house", "definition" => "You live in it"},
  #     {"word" => "drink", "definition" => "coca cola, for example!"}
  #   ]

  #   # incoming_word = "duck"
  #   # word_array.each do |word|
  #   #   if word["word"] == incoming_word
  #   #      @definition = word["definition"]
  #   #   end
  #   # end
  #   render json: {definition: @definition}
  # end

  def grab_definition
    #make http party request, render back definition
    #word will have to come over from params
    key = "64e90a58d89a8e7f3f000001fe809d0cd55d32cb45b9f117e"
    word = params["word"]["newWord"] #later this will be dynamic
    response = HTTParty.get("http://api.wordnik.com:80/v4/word.json/#{word}/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=#{key}")
    response = response[0]["text"]
    render json: {definition: response}
  end

  private

  def word_params
    params.require(:word).permit(:word, :definition)
  end

end
