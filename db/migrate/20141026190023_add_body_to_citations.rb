class AddBodyToCitations < ActiveRecord::Migration
  def change
    add_column :citations, :body, :string
    add_column :citations, :word, :string
  end
end
