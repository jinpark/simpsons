class AddScreenshotPathColumnToScreenshots < ActiveRecord::Migration
  def change
    add_column :screenshots, :screenshot_path, :string
  end
end
