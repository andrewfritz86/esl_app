class SnippetsController < ApplicationController

  def create
    # binding.pry
    render json:
    Snippet.create(snippet_params)
    #here we need to set the snippet's story id and such
  end




  def snippet_params
    params.require(:snippet).permit(:body, :story_id)
  end

end


