function getIt() {
  $('p').on('click', function(){
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass("tasty");
  });
}

function pressIt() {
  $().on('keydown', function(key){
    
  });
}

$(document).ready(function(){

  getIt();
  frameIt();

});
