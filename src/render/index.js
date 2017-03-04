//
// module depnedenceis
//

import $ from 'jquery';
import tvShowsContainer from 'src/tv-shows-container';

var template = `<article class="tv-show"> +
    <div class="left">
    <img src=":img:" alt=":img alt:">
    </div>
    <div class="left info">
  <h1>:name:</h1>
    <p>:summary:</p>
  <button class ="like">💓</button>
    </div>
    </article>`;

export default function renderShows(shows){
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
