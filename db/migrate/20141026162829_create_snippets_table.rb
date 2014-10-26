class CreateSnippetsTable < ActiveRecord::Migration
  def change
    create_table :snippets do |t|
      t.string :body
      t.integer :story_id
      t.integer :word_id
      t.string :word
    end
  end
end
