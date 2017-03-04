//
 // Module dependencies
//
 import $ from 'jquery';

 export function getShows(fn){
   $.ajax('http://api.tvmaze.com/shows',{
     succes: function (shows, textStatus, xhr){
       fn(shows);
     }
   });

 }
export function searchShows(busqueda, fn){
  $.ajax('http://api.tvmaze.com/shows',{
    data:busqueda,
    succes:function (res,textStatus,xhr){
      fn(res);
    }
  });

}
