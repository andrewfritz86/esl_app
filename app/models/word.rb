class Word < ActiveRecord::Base
  has_many :citations
  has_many :stories, :through => :citations
end
