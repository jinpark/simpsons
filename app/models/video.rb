class Video < ActiveRecord::Base

    def self.random(count)
        # order("RANDOM()").limit(count)
        self.all.sample(count)
    end
end
