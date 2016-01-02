class CreateScreenshots < ActiveRecord::Migration
  def change
    create_table :screenshots do |t|
      t.integer :season
      t.integer :episode_number
      t.time :time_start
      t.time :time_end

      t.timestamps null: false
    end
  end
end
