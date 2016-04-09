class AddDashPathToVideos < ActiveRecord::Migration
  def change
    add_column :videos, :dash_path, :string
  end
end
