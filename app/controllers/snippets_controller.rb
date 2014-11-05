class SnippetsController < ApplicationController

  def create
    render json:
    Snippet.create(snippet_params)
  end




  def snippet_params
    params.require(:snippet).permit(:body, :story_id)
  end

end


