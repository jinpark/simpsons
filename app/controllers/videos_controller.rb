class VideosController < ApplicationController
  before_action :set_video, only: [:edit, :update, :destroy]
  before_action :get_video_from_season_episode_number, only: [:show]

  # GET /videos
  # GET /videos.json
  def index
    # if !cookies[:random_list]
    #     random_videos = Video.random(Video.count)
    #     random_ids = random_videos.pluck('id')
    #     cookies[:random_list] = ActiveSupport::JSON.encode(random_ids)
    # else
    #     random_ids = ActiveSupport::JSON.decode(cookies[:random_list])
    # end
    # random_list_sorted_videos = Video.find(random_ids).index_by(&:id).slice(*random_ids).values
    # @videos = random_list_sorted_videos
    @videos = Video.all.group_by(&:season)
    @videos_seasons = @videos.keys

  end

  # GET /videos/1
  # GET /videos/1.json
  def show

  end

  # POST /videos
  # POST /videos.json
  # def create
  #   @video = Video.new(video_params)

  #   respond_to do |format|
  #     if @video.save
  #       format.html { redirect_to @video, notice: 'Video was successfully created.' }
  #       format.json { render :show, status: :created, location: @video }
  #     else
  #       format.html { render :new }
  #       format.json { render json: @video.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # PATCH/PUT /videos/1
  # PATCH/PUT /videos/1.json
  # def update
  #   respond_to do |format|
  #     if @video.update(video_params)
  #       format.html { redirect_to @video, notice: 'Video was successfully updated.' }
  #       format.json { render :show, status: :ok, location: @video }
  #     else
  #       format.html { render :edit }
  #       format.json { render json: @video.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # DELETE /videos/1
  # DELETE /videos/1.json
  # def destroy
  #   @video.destroy
  #   respond_to do |format|
  #     format.html { redirect_to videos_url, notice: 'Video was successfully destroyed.' }
  #     format.json { head :no_content }
  #   end
  # end

  def random
    video = Video.random(Video.count).first
    redirect_to "/watch/#{video.season}/#{video.episode_number}"
  end

  def history
    @videos = []
    if cookies[:watched]
        video_ids = ActiveSupport::JSON.decode(cookies[:watched])
        unsorted_videos = Video.find(video_ids)
        @videos = video_ids.collect {|id| unsorted_videos.detect {|video| video.id == id}}
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_video
      @video = Video.find(params[:id])
    end

    def get_video_from_season_episode_number
      if params[:season] && params[:episode_number]
          season = params[:season].to_i
          episode_number = params[:episode_number].to_i
          @video = Video.find_by_season_and_episode_number(season, episode_number)
          params[:id] = @video.id
      end
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def video_params
      params.require(:video).permit(:title, :season, :episode_number, :thumbnail_path, :video_path, :slug)
    end
end
