  class CitationsController < ApplicationController

  def create
    # render json:
    new_citation = Citation.create(citation_params)
    new_citation.story_id= session[:new_story_id]
    # binding.pry
    new_citation.save
  end

  def index
    @citations = Story.find(57).citations.all
    #later here we can have Story.find(session[:current_story_id]).citations.all
    render json: @citations
  end




  private

  def citation_params
    params.require(:citation).permit(:body, :story_id)
  end

end
