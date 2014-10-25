class Story < ActiveRecord::Base
  belongs_to :user
  has_many :citations
  has_many :words, :through => :citations
end
