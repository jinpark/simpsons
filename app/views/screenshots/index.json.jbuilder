json.array!(@screenshots) do |screenshot|
  json.extract! screenshot, :id, :season, :episode_number, :time_start, :time_end
  json.url screenshot_url(screenshot, format: :json)
end
