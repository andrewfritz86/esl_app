  class CitationsController < ApplicationController

  def create
    new_citation = Citation.create(citation_params)
    new_citation.story_id= session[:story_id]
    new_citation.save
    current_story = Story.find(session[:story_id])
    if !current_story.title
    current_story.title = params[:citation][:title]
    current_story.save
    end
  end

  def index
    @citations = Citation.where(story_id: session[:story_id])
    render json: @citations
  end

  def match
    @body = params[:text_body][:currentbody]
    @split = @body.split(" ")
    #grab last word , delete all punctuation?
    @new_body = []
    #rather than simply match, we should use scan
    @split.each do |new_word|

      Word.where(story_id: session[:story_id]).each do |second_word|
        binding.pry
        if new_word.downcase == second_word.word
          #scan logic here. new_word.downcase.scan(second_word.word)
          #this will return an array
          new_word = "<span class='special'> #{new_word} </span>"
        end
      end
        @new_body.push(new_word)
    end
    @new_body = @new_body.join(" ") + "  "
    @hash = {body: @new_body}
    render json: @hash
    ##need to grab last word, remove any punctuation, etc

  end




  private

  def citation_params
    params.require(:citation).permit(:body, :story_id)
  end

end
