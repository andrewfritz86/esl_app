class User < ActiveRecord::Base
  has_many :stories, dependent: :destroy
  has_many :words, :through => :stories
end
