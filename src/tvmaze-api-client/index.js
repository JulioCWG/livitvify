//
 // Module dependencies
//
 import $ from 'jquery';

 export function getShows(fn){
   $.ajax('http://api.tvmaze.com/shows',{
     succes: function (data, textStatus, xhr){
       fn(data);
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
