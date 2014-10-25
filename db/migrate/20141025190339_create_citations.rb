class CreateCitations < ActiveRecord::Migration
  def change
    create_table :citations do |t|
      t.integer :word_id
      t.integer :story_id

      t.timestamps
    end
  end
end
