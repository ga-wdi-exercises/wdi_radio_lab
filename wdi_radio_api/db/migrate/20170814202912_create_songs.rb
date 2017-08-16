class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :preview_url
      t.integer :itunes_id
      t.references :album, foreign_key: true
      t.references :artist, foreign_key: true
    end
  end
end
