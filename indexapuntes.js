// window.onload = function (){
//   alert('loaded');
// };

// var alerta = function (mensaje){
//   alert(mensaje);
// };
//
// alerta('hola Julio');

// $(document).ready(function (){
//   alert('ready');
// });

// $(function(){
//   alert('ready');
// });

// $.noConflict();
// jQuery(document).ready(function($){
//   $ //jQuery
// });
// $ // prototype
//$(function(){
  // +++ elemento del DOM
  // var header = document.getElementById('app-header');
  // console.log(header);

  // var header = $('#app-header h1');
  // console.log(header);
  // var subHeader = $('h1 + h2');
  // console.log(subHeader);
  // +++++ Jquery OBject para ingresar al elemento dom es sub indice "0"
  // var header = $('header');
  // var title = $('h1',header[0]);
  // console.log(title);

  ///////// +++++ Jquery object
  // var $header = $(header);
  // // +++ acceder a varios elementos
  // var headigns = $('h1, h2');
  // console.log(headings);
//+++seleccion arreglos de lo que se necesite
  // var seleccion = $([document, header]);
//++ seleccion dependiendo de los tipos de los selectores
  // $(':input'); //<input>, <textarea>,<button>
  // $(':selected'); //todos los radio button etc

//});
//++++++++++++++++++++++++Apuntes++++++++++++++++++++
//$(function(){
  // var header = document.getElementById('app-header');
  // var seleccion = $([document, header]);

  // seleccion encontrar h1 en el header
  // $('#app-header').find('h1');
  // seleccion de los p filtrando que tengan la clase text
  //  $('p').filter('.text') //<p class = text></p>
  //  .has('a')
  //  .first() //el primero de los p
  //  .eq(1); // el segundo porque el subindice inicia en 0
//$(function(){
  // var a = $('<a>', {
  //   href: 'http://platzi.com',
  //   target: '_blank',
  //   html: 'Ir a Platzi'
  // });
  // $('#app-body').append(a);
  //
  // console.log(a.attr('href')); //metodos tipo getter solo afectan al primer elemento de la seleccion
  // a
  //   .attr('href', 'http://google.com') // metodos son tipos setter
  //   .attr('title', 'ir a google'); //y modifican la seleccion si son multiples elementos a todos

// cuando se hacen dos selecciones de un mismo elemento
// conviene seleccionar una sola vez primero y después hacer
// referencia a dicha seleccion para manipularlo.
// $(function(){
// //   $('header#app-header')
// //   .append($('<p>', {html: 'Me acaban de crear ahoritita!!'}));
// //
// // $('<p>', {html: 'Me acaban de crear pero de forma invertida !!'})
// // .appendTo($('header#app-header'));
// });
