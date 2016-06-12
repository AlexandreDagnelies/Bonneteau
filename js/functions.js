/*
 * iDol scratch game
 * @author Dolmen Technologies
 * V1.0
 * 
 * Use idol-tickets.js to manage tickets game
 */

/**
 * Module initialization
 * Function called from the app
 * @param param context saved by the app
 */


function startModule(param)
{

  if (param)
    context = param;

  //Do something
  start();
  //iDol.output('module_output_event', outputParam);

}

/**
 * Module reinitialization
 * Function called from the app when the scenario restart for the next customer
 * @param param context saved by the app
 */


function restartModule()
{

  //if (param) context = param;

  //Do something

  //iDol.output('module_output_event', outputParam);
  $('#shield').remove();
  startModule();
}

var isMobile = new RegExp('/iphone|ipad|ipod|android|blackberry/i').test(navigator.userAgent.toLowerCase());
if (!isMobile) {
  $(window).load(function () {
    alert('Demarrage depuis le navigateur');
    startModule();
  });
}
// -----------------------------------------------------------//
// ------------------- Bonneteau function ------------------- //
// --------Create by Alexandre Dagnelies, Benoit Ferrer-------//
// -----------------------------------------------------------//

/* start game 
 Start the game.
 @Param : var RandomInt : Random Number between 1 and 3 
 Function showItem : Param randomInt
 */


function start() {
//console.log("start");

  $('.button').fadeOut(1000, function () {
    $('.gobelets').fadeIn(100);
    // Random number between 1 and 3 
    randomInt = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    // Display a thimble 
    showItem(randomInt);
    //enable the player to click
    $('body').append("<div id='shield'></div>");
    $(".gobelet-cont").off('click').on('click', function () {
      r = $(this).attr('g');
      if (r == randomInt) {
        //Win
        $('#gobelet' + r + '').animate({top: "-150px"}, 'slow');
        //document.getElementById('jeu-gagné').style.display = "block";
        $('#jeu-gagné').css({"display": "block"});
        $('#jeu-gagné').show();
        $('body').append("<div id='shield'></div>");
        $('#gobelet' + r + '').animate({top: "00px"}, 'slow', function () {
          $('.restart').fadeIn(500);
        });

      } else {
        // Loose 
        $('#gobelet' + r + '').animate({top: "-150px"}, 'slow');
        //document.getElementById('jeu-perdu').style.display = "block";
        $('#jeu-perdu').css({"display": "block"});
        $('#jeu-perdu').show();
        $('#gobelet' + r + '').animate({top: "00px"}, 'slow', function () {
          $('.restart').fadeIn(500);
        });
        $('body').append("<div id='shield'></div>");
      }
    });
  });

}
;
/*
 * Reset the module
 * @returns {undefined}
 */
function restart() {

  $('.restart').fadeOut(1000, function () {
    $('.itemAtrouver').hide();
    $('.jeu').hide();
    $('#shield').hide(function () {
      restartModule();
    });

  });
}
/*
 Displays the dice in the cup.
 Call by start()
 @Param : randomInt
 */

function showItem(randomInt) {

  var item = 'item' + randomInt;

  jQuery.fx.speeds.slow = 1500;
  $('#gobelet' + randomInt + '').animate({top: "-150px"}, 'slow');
  $('#item' + randomInt + '').hide();
  $('#item' + randomInt + '').css({"display": "block"});
  $('#item' + randomInt + '').show();
  $('#gobelet' + randomInt + '').animate({top: "00px"}, function () {
    game(Math.floor(Math.random() * 2) + 1, 700);
  });

}


/*
 * 
 * @param {type} divRight
 * @param {type} divMiddle
 * @param {type} speed
 * @returns {undefined}
 */
function swichPlaceRight(divRight, divMiddle, speed) {
  $(divMiddle).css({"z-index": "0"});
  $(divRight).css({"z-index": "1"});
  var bezier_params = {
    start: {x: divRight.position().left, y: divRight.position().top, angle: -400},
    end: {x: divMiddle.position().left, y: divMiddle.position().top, angle: 40, length: 0.2}
  };

  var bezier_params2 = {
    start: {x: divMiddle.position().left, y: divMiddle.position().top, angle: -400},
    end: {x: divRight.position().left, y: divRight.position().top, angle: 40, length: 0.2}
  };

  $(divRight).animate({path: new $.path.bezier(bezier_params)}, speed);
  $(divMiddle)
      .animate({path: new $.path.bezier(bezier_params2)}, speed, function () {
        game(1, 700);
      });
}
/*
 * ALEEEEEEX
 * @param {type} divLeft
 * @param {type} divMiddle
 * @param {type} speed
 * @returns {undefined}
 */
function swichPlaceLeft(divLeft, divMiddle, speed) {
  $(divMiddle).css({"z-index": "1"});
  $(divLeft).css({"z-index": "0"});
  var bezier_params = {
    start: {x: divLeft.position().left, y: divLeft.position().top, angle: -400},
    end: {x: divMiddle.position().left, y: divMiddle.position().top, angle: 40, length: 0.2}
  };

  var bezier_params2 = {
    start: {x: divMiddle.position().left, y: divMiddle.position().top, angle: -400},
    end: {x: divLeft.position().left, y: divLeft.position().top, angle: 40, length: 0.2}
  };

  $(divLeft).animate({path: new $.path.bezier(bezier_params)}, speed);
  $(divMiddle)
      .animate({path: new $.path.bezier(bezier_params2)}, speed, function () {
        game(0, 700);
      });

}
var trick = 0;
var SpeedIncrement = 0;
/*
 * ALEX
 */
function game(val, speed) {
  //console.log(trick);
  //console.log(SpeedIncrement);
  //on recéupère la positon des 3 gobelets et on les places dans un tableau
  var cupArray = [$("#cupOne"), $("#cupTwo"), $("#cupThree")];
  if (trick < 16) {
    //On trie les gobelets
    cupArray.sort(function (a, b) {
      return a.position().left - b.position().left;
    });
    var leftCup = cupArray[0];
    var middleCup = cupArray[1];
    var rightCup = cupArray[2];
    //Mode Aléatoire
    val = Math.floor(Math.random() * 2) + 1;
    if (val == 1) {
      swichPlaceLeft(leftCup, middleCup, (speed - SpeedIncrement)); 
    } else {
      swichPlaceRight(rightCup, middleCup, (speed - SpeedIncrement));

    }
  } else {
    //fin du jeu
    //On remet trick à zéro pour relancer
    trick = 0;
    SpeedIncrement = 0;

    //On redonne accès au click à l'utilisateur
    $('#shield').remove();
  }

  SpeedIncrement += 30;
  trick++;
}

