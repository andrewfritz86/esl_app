class Citation < ActiveRecord::Base
  belongs_to :word
  belongs_to :story
end
