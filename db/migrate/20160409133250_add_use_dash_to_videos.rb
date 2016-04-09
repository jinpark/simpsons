class AddUseDashToVideos < ActiveRecord::Migration
  def change
    add_column :videos, :use_dash, :boolean
  end
end
