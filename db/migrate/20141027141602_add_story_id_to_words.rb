class AddStoryIdToWords < ActiveRecord::Migration
  def change
    add_column :words, :story_id, :integer
  end
end
