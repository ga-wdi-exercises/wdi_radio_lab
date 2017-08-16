class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :name
      t.string :image_url
      t.integer :itunes_id
      t.references :artist, foreign_key: true
    end
  end
end
