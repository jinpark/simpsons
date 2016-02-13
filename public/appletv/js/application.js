App.onLaunch = function(options) {
    baseurl = options.BASEURL;
    basetvpath = options.BASETVPATH;
    App.launchOptions = options;
    evaluateScripts([`${baseurl}${basetvpath}js/atv.min.js`, 
                     `${baseurl}${basetvpath}js/handlebars-v4.0.5.js`, 
                     `${baseurl}${basetvpath}js/templates.js`,
                     `${baseurl}${basetvpath}js/pages.js`,
                     `${baseurl}${basetvpath}js/helpers.js`], onEvaluate);
};

function onEvaluate(success) {
    if (!success) {
        // application failed to load
        console.log('crashed');
    }
    // start at the seasons page
    ATV.Navigation.navigate('seasons');
}
