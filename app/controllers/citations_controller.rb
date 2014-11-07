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
    @split.each do |word|

      Word.where(story_id: session[:story_id]).each do |second_word|
        if word.downcase == second_word.word
          word = "<span class='special'> #{word} </span>"
        end
      end
        @new_body.push(word)
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
