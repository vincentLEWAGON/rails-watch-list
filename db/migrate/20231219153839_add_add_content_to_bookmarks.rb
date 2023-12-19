class AddAddContentToBookmarks < ActiveRecord::Migration[7.1]
  def change
    add_column :bookmarks, :content, :string
  end
end
