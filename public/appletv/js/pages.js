ATV.Page.create({
        name: 'seasons',
        url: baseurl + 'seasons.json',
        template: seasonsTemplate,
        events: {
            select: 'onSelect',
        },
        onSelect(e) {
            var season_number = e.target.getAttribute('data-season-number');
            ATV.Navigation.navigate('season', {season: season_number});
        }
    });

ATV.Page.create({
    name: 'season',
    template: seasonTemplate,
    events: {
        select: 'onSelect',
        // play: 'onSelect'
    },
    ready(options, resolve, reject) {
            ATV.Ajax
                .get(baseurl + 'seasons/' + options.season + '.json')
                .then(function(xhr) {
                    // xhr succeeded
                    var response = xhr.response;
                    // call resolve with the data that will be applied to the template
                    // you can even call resolve with false to skip navigation
                    resolve(
                        response
                    );
                }, function(xhr) {
                    // xhr failed
                    var response = xhr.response;
                    reject({
                        status: xhr.status,
                        message: response.message
                    });
                })
    },
    onSelect(e) {
        var data_video = JSON.parse(e.target.getAttribute('data-video'));
        var video_array = [];
        if (data_video.constructor !== Array) {
            video_array.push(data_video);
        } else {
            video_array = data_video;
        }
        startPlayback(e, video_array)
    }
});
