class CreateSeasons < ActiveRecord::Migration
  def change
    create_table :seasons do |t|
      t.string :image_path
      t.integer :season_number
      t.text :description

      t.timestamps null: false
    end
  end
end
