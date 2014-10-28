  class CitationsController < ApplicationController

  def create
    # render json:
    new_citation = Citation.create(citation_params)
    new_citation.story_id= session[:story_id]
    # does new story id need to change ?
    #if statement here to check for story id?
    # binding.pry
    new_citation.save
    current_story = Story.find(session[:story_id])
    if !current_story.title
    current_story.title = params[:citation][:title]
    current_story.save
    end
    # binding.pry
  end

  def index
    # @citations = Story.find(57).citations.all
    # @citations = Story.find(session[:new_story_id]).citations.all
    @citations = Citation.where(story_id: session[:story_id])

    # binding.pry
    #later here we can have Story.find(session[:current_story_id]).citations.all
    render json: @citations
  end

  def match
    @body = params[:text_body][:currentbody]
    @split = @body.split(" ")
    @new_body = []
    @split.each do |word|

      Word.where(story_id: session[:story_id]).each do |second_word|
        if word.downcase == second_word.word
          #need logic to break punctiation errors
          word = "<span class='special'> #{word} </span>"
        end
      end
        @new_body.push(word)
    end
    @new_body = @new_body.join(" ") + "  "
    # binding.pry
    @hash = {body: @new_body}
    render json: @hash

  end




  private

  def citation_params
    params.require(:citation).permit(:body, :story_id)
  end

end
