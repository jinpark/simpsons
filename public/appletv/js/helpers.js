function startPlayback(event, video_data) {
    var videos = video_data;
    /*
    In TVMLKit, playback is handled entirely from JavaScript. The TVMLKit Player
    handles both audio and video MediaItems in any format supported by AVPlayer. You
    can also mix MediaItems of either type or format in the Player's Playlist.
    */
    var player = new Player();

    /*
    The playlist is an array of MediaItems. Each player must have a playlist,
    even if you only intend to play a single asset.
    */
    player.playlist = new Playlist();

    videos.forEach(function(metadata) {
        /*
        MediaItems are instantiated by passing two arguments to the MediaItem
        contructor, media type as a string ('video', 'audio') and the url for
        the asset itself.
        */
        var video = new MediaItem('video', baseurl + metadata.video_path);

        /*
        You can set several properties on the MediaItem. Some properities are
        informational and are used to present additional information to the
        user. Other properties will determine the behavior of the player.

        For a full list of available properties, see the TVMLKit documentation.
        */
        video.title = metadata.title;
        video.subtitle = "Season " + metadata.season + " Episode " + metadata.episode_number;
        // video.description = metadata.description;
        video.artworkImageURL = baseurl + metadata.thumbnail_path;

        /*
        ContentRatingDomain and contentRatingRanking are used together to enforce
        parental controls. If Parental Controls have been set for the device and
        the contentRatingRanking is higer than the device setting, the user will
        be prompted to enter their device Parental PIN Code in order to play the
        current asset.

        */
        // video.contentRatingDomain = metadata.contentRatingDomain;
        // video.contentRatingRanking = metadata.contentRatingRanking;

        /*
        The resumeTime is used to communicate the time at which a user previously stopped
        watching this asset, a bookmark. If this property is present the user will be
        prompted to resume playback from the point or start the asset over.

        resumeTime is the number of seconds from the beginning of the asset.
        */
        // video.resumeTime = metadata.resumeTime;

        /*
        The MediaItem can be added to the Playlist with the push function.
        */
        player.playlist.push(video);
    });

    /*
    This function is a convenience function used to set listeners for various playback
    events.
    */
    // setPlaybackEventListeners(player);

    /*
    Once the Player is ready, playback is started by calling the play function on the
    Player instance.
    */
    player.play();
}

//handlebar helpers
Handlebars.registerHelper('json', function(context) {
    return JSON.stringify(context);
});
Handlebars.registerHelper('baseurl', function() {
    return baseurl;
});
