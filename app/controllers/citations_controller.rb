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
    @new_body = []
    @split.each do |new_word|
      Word.where(story_id: session[:story_id]).each do |second_word|
        if new_word.downcase.include?(second_word.word)
          new_word = "<span class='special'> #{new_word} </span>"
        end
      end
        @new_body.push(new_word)
    end
    @new_body = @new_body.join(" ") + "  "
    @hash = {body: @new_body}
    render json: @hash
  end



  private

  def citation_params
    params.require(:citation).permit(:body, :story_id)
  end

end
