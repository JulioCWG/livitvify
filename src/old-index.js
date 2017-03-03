//
// Module dependencies
//
//var $ = require('jquery');
import $ from 'jquery';

$(function() {

    var tvShowsContainer = $('#app-body').find('.tv-shows');

    tvShowsContainer.on('click','button.like',function (ev){
      var $this = $(this);
      $this.closest('.tv-show').toggleClass('liked');
      // $this.animate({
      //   'font-size':'30px'  //una de las formas de agregar animacion
      // }, '500');
    });

    function renderShows(shows){
      tvShowsContainer.find('.loader').remove();
      shows.forEach(function (show){
          var article = template
          .replace(':name:', show.name)
          .replace(':img:', show.image ? show.image.medium :'') // operador ternario para trabajar en una línea
          .replace(':summary:', show.summary)
          .replace(':img alt:', show.name + "Logo");

          var $article = $(article);
          $article.hide();
          tvShowsContainer.append($article);
          $article.fadeIn(2500);

      });
    }
    //Submit search-form
    $('#app-body').find('form')
        .submit(function(ev) {
            ev.preventDefault();
            var busqueda = $(this)
                .find('input[type="text"]')
                .val();

            tvShowsContainer.find('.tv-show').remove();
            var loader = $('<div class = loader></div>');
            loader.appendTo(tvShowsContainer);
            $.ajax({
              url: 'http://api.tvmaze.com/search/shows',
              data:{q: busqueda},
              success: function(respuesta, textStatus,xhr){
                  loader.remove();
                  var shows =respuesta.map(function(elemresp){
                  return elemresp.show;
                });
                renderShows(shows);
              }
            });
        });

        var template = '<article class="tv-show">' +
            '<div class="left">' +
            '<img src=":img:" alt=":img alt:">' +
            '</div>' +
            '<div class="left info">' +
            '<h1>:name:</h1>' +
            '<p>:summary:</p>' +
            '<button class ="like">💓</button>'+
            '</div>' +
            '</article>';
            //usando Callbacks
    // $.ajax({
    //     url: "http://api.tvmaze.com/shows",
    //     success: function(shows, textStatus, xhr) {
    //
    //       tvShowsContainer.find('.loader').remove();
    //       renderShows(shows);
    //
    //     }
    // });
    //
      //usando Promesas - Promises y local storage para cachear datos en el cliente
      if(!localStorage.shows){
      $.ajax('http://api.tvmaze.com/shows')
      .then(function(shows){
        tvShowsContainer.find('.loader').remove();
        localStorage.shows = JSON.stringify(shows);
        renderShows(shows);
      });
    }else{
      renderShows(JSON.parse(localStorage.shows));
    }
});
