json.array!(@seasons) do |season|
  json.extract! season, :id, :image_path, :season_number, :description
  json.url season_url(season, format: :json)
  json.videos season.videos do |video|
    json.(video, :id, :title, :season, :episode_number, :thumbnail_path, :video_path, :slug, :created_at, :updated_at)
  end
end
