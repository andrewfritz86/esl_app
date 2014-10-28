Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'welcome#index'

  resource :session

  resources :users do
    resources :stories
  end

  resources :snippets
  resources :words

  resources :citations

  get '/story_form' => 'stories#template'
  get '/retrieve' => 'stories#retrieve'
  get '/random_word' => 'words#random'
  get '/definition' => 'words#grab_definition'
  get '/highlight' => 'citations#match'


end


