'use strict';

console.log('adaDAS----->');
function u() {
  let render = Handlebars.compile($('#playlist-template').text());
  $('#playlist').append(
    trackData.map(render)
  );
  spotifyView.playPreview();
};

const spotifyView = {};

spotifyView.resetButton = function() {
  $('#reset-button').on('click', function(){
    $('#playlist').empty();
    $('#query1').empty();
    $('#query2').empty();
  })
};

spotifyView.playPreview = function() {
$('.icon-play3').on('click', function(e) {
  console.log(this.id);
  $('audio').attr('src', this.id);
  });
};
