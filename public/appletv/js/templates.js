function seasonsTemplate(data){
    var template = Handlebars.compile(seasonsHandlebars);   
    return template({data: data})  
}

function seasonTemplate(data){
    var template = Handlebars.compile(seasonHandlebars);   
    return template({data: data})  
}


var seasonsHandlebars = `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <listTemplate>
    <banner>
      <background>
        <img src="{{{baseurl}}}/appletv/assets/header.png" width="1920" height="360" />
      </background>
    </banner>
    <list>
      <header>
        <title></title>
      </header>
      <section>
        <header>
          <title>Seasons</title>
        </header>
        {{#each data}}
        <listItemLockup data-season-number='{{this.season_number}}'>
          <title>Season {{this.season_number}}</title>
          <relatedContent>
            <lockup data-season-number='{{this.season_number}}'>
              <img src="{{{baseurl}}}{{this.image_path}}"/>
              <title>Season {{this.season_number}}</title>
              <subtitle>{{this.videos.length}} Episodes</subtitle>
              <description></description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        {{/each}}
      </section>
    </list>
  </listTemplate>
</document>`;

var seasonHandlebars = `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
    .showTextOnHighlight {
      tv-text-highlight-style: show-on-highlight;
    }
    .whiteButton {
      tv-tint-color: rgb(255, 255, 255);
    }
    .shelfLayout {
      padding: 40 90;
    }
    </style>
  </head>
  <productBundleTemplate>
    <background>
      <img src="{{{baseurl}}}{{data.image_path}}"/>
    </background>
    <banner>
      <stack>
        <title>Season {{data.season_number}}</title>
        <subtitle>{{data.videos.length}} Episodes</subtitle>
        <description></description>

        <row class="buttons">
          <buttonLockup data-video='{{{json data.videos}}}'>
            <badge src="resource://button-play" class="whiteButton" />
            <title>Watch All</title>
          </buttonLockup>
        </row>
      </stack>
    </banner>
    <shelf>
      <header>
        <title></title>
      </header>
      <section>
      {{#each data.videos}}
        <lockup data-video='{{{json this}}}'>
          <img src="{{{baseurl}}}{{this.thumbnail_path}}" width="252" height="160" />
          <title class="showTextOnHighlight">Episode {{this.episode_number}}</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>{{this.title}}</title>
              </header>
              <info>
                <header>
                  <title></title>
                </header>
                <description>Episode {{this.episode_number}}</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
      {{/each}}
      </section>
    </shelf>
  </productBundleTemplate>
</document>`;
