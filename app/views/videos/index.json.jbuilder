json.array!(@videos) do |video|
  json.extract! video, :id, :title, :season, :episode_number, :thumbnail_path, :video_path, :slug
  json.url video_url(video, format: :json)
end
