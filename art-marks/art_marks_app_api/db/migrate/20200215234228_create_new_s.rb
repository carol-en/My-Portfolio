class CreateNewS < ActiveRecord::Migration[6.0]
  def change
    create_table :new_s do |t|
      t.string :bookmarks
      t.string :site_name
      t.string :category
      t.string :url
      t.string :img
      t.string :description

      t.timestamps
    end
  end
end
