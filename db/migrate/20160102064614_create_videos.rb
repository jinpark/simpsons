class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :title
      t.integer :season
      t.integer :episode_number
      t.string :thumbnail_path
      t.string :video_path
      t.string :slug

      t.timestamps null: false
    end
  end
end
