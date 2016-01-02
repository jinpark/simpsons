class AddSubtitlePathColumnToVideos < ActiveRecord::Migration
  def change
    add_column :videos, :subtitle_path, :string
  end
end
