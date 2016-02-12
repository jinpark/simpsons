class AddSeasonToVideos < ActiveRecord::Migration
  def change
    add_reference :videos, :season, index: true, foreign_key: true
  end
end
