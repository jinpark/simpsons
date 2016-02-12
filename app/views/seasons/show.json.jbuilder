json.extract! @season, :id, :image_path, :season_number, :description, :created_at, :updated_at
json.videos @season.videos do |video|
  json.(video, :id, :title, :season, :episode_number, :thumbnail_path, :video_path, :slug)
end
