json.array!(@videos) do |key, array|
    json.set!(key, array)
end
