function reset(){
}


function showItem(randomInt){
  jQuery.fx.speeds.slow = 1500;
  
  $('#gobelet'+randomInt+'').animate({top:"-150px"}, 'slow');
  $('#item'+randomInt+'').hide();
  var item = 'item'+randomInt;
  console.log();
 //document.getElementById("item"+randomInt+'').style.zIndex = "1";
 document.getElementById("item"+randomInt+'').style.display = "block";
$('#item'+randomInt+'').show();
//$('#gobelet'+randomInt+'').animate({top:"00px"}, animg1);
game(1, 700);
}

function verif(){

  var g= 0;

  $('.gobelet-cont').off('click').css({'cursor':'default'});
  var r = $(this).attr('g');

    if(r == g){
    //gagné
    console.log('gagné');
    
    }
  else{
    //perdu
    
console.log('perdu');
}
}

function start(){
  randomInt = Math.floor(Math.random() * (3 - 1 +1)) + 1;

showItem(randomInt);
//setTimeout(hideItem(randomInt), 2900);


  
}

function animg1(){

$('.g1').animate({left:"250px", top:"100px"});
$('.g1').animate({ scale:8}, "-=.5");
$('.g1').animate({ scale:1}, "-=.25");
$('.g2').animate({left:"100px" , top:"70px"}, "-=.5");
$('.g2').animate({ scale:1.1}, "-=.5");
$('.g2').animate({ scale:9}, "-=.25", animg2);
}

function animg2(){
 
$('.g1').animate({left:"400px" , top:"70px"});
$('.g1').animate({ scale:1.1}, "-=.5");
$('.g1').animate({ scale:9}, "-=.25");   
$('.g3').animate({left:"250px" , top:"100px"});
$('.g3').animate({ scale:8}, "-=.5");
$('.g3').animate( { scale:1}, "-=.25", animg3);
}

function animg3(){
$('.g2').animate({left:"250px" , top:"100px"});
$('.g2').animate({ scale:8}, "-=.5");
$('.g2').animate( { scale:1}, "-=.25");  
$('.g3').animate({left:"100px" , top:"70px"}, "-=.5");
$('.g3').animate({ scale:1.1}, "-=.5");
$('.g3').animate( { scale:9}, "-=.25", animg4);
}
function animg4(){

  
$('.g2').animate({left:"400px" , top:"70px"});  
$('.g2').animate( { scale:1.1}, "-=.5");
$('.g2').animate( { scale:9}, "-=.25");   
$('.g1').animate({left:"250px" , top:"100px"}, "-.5");
$('.g1').animate({ scale:8}, "-=.5");
$('.g1').animate({ scale:1}, "-=.25", animg5);
}

function animg5(){
//$('.g2').animate(zIndex= "9");
//$('.g1').animate(zIndex= "10");
  
$('.g1').animate({left:"400px" , top:"70px"});
$('.g1').animate({ scale:1.1}, "-=.5");
$('.g1').animate({ scale:9}, "-=.25");
$('.g2').animate({left:"250px" , top:"100px"});
$('.g2').animate({ scale:8}, "-=.5");
$('.g2').animate( { scale:1}, "-=.25", animg6);
}

function animg6(){
$('.g3').animate({left:"250px" , top:"100px"}); 
$('.g3').animate({ scale:1.1}, "-=.5");
$('.g3').animate( { scale:9}, "-=.25"); 
$('.g2').animate({left:"100px" , top:"70px"});
$('.g2').animate({ scale:8}, "-=.5");
$('.g2').animate({ scale:1}, "-=.25"), animg7;
}

function animg7(){
//$('.g3').animate(zIndex= "10");
//$('.g1').animate(zIndex= "9");
  
$('.g3').animate({left:"400px" , top:"70px"});  
$('.g3').animate({ scale:1.1}, "-=.5");
$('.g3').animate( { scale:9}, "-=.25");  
$('.g1').animate({left:"250px" , top:"100px"}, "-.5");
$('.g1').animate({ scale:8}, "-=.5");
$('.g1').animate({ scale:1}, "-=.25", animg8);
}

function animg8(){
//$('.g1').animate(zIndex= "10");
//$('.g2').animate(zIndex= "9");
  
$('.g2').animate({left:"400px" , top:"70px"});  
$('.g2').animate( { scale:1.1}, "-=.5");
$('.g2').animate( { scale:9}, "-=.25");  
$('.g3').animate({left:"250px" , top:"100px"}, "-=.5");  
$('.g3').animate({ scale:8}, "-=.5");
$('.g3').animate( { scale:1}, "-=.25", animg9);
}

function animg9(){
//$('.g3').animate(zIndex= "10");
//$('.g1').animate(zIndex= "9");
  
$('.g1').animate({left:"250px" , top:"100px"}, "-.5");
$('.g1').animate({ scale:8}, "-=.5");
$('.g1').animate({ scale:1}, "-=.25");  
$('.g3').animate({left:"100px" , top:"70px"}, "-=.5");
$('.g3').animate({ scale:1.1}, "-=.5");
$('.g3').animate( { scale:9}, "-=.25");
}



