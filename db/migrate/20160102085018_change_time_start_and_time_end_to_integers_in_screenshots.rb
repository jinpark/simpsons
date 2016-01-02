class ChangeTimeStartAndTimeEndToIntegersInScreenshots < ActiveRecord::Migration
  def change
    change_column :screenshots, :time_start, :integer
    change_column :screenshots, :time_end, :integer
  end
end
