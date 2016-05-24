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
    iDol.output('module_output_event', outputParam);

}

/**
 * Module reinitialization
 * Function called from the app when the scenario restart for the next customer
 * @param param context saved by the app
 */
function startModule(param)
{
    if (param)
        context = param;

    //Do something

    iDol.output('module_output_event', outputParam);

}

var isMobile = new RegExp('/iphone|ipad|ipod|android|blackberry/i').test(navigator.userAgent.toLowerCase());
if (!isMobile) {
    $(window).load(function () {
        alert('Demarrage depuis le navigateur');
        startModule();
    });
}


function reset() {
}


var showItem = function (randomInt) {
    jQuery.fx.speeds.slow = 1500;

    $('#gobelet' + randomInt + '').animate({top: "-150px"}, 'slow');
    $('#item' + randomInt + '').hide();
    var item = 'item' + randomInt;
    console.log();
    //document.getElementById("item"+randomInt+'').style.zIndex = "1";
    document.getElementById("item" + randomInt + '').style.display = "block";
    $('#item' + randomInt + '').show();
    $('#gobelet' + randomInt + '').animate({top: "00px"}, animg1);

}

var verif = function (randomInt) {

    var g = randomInt;

    $(".gobelet-cont").click(function () {
        var r = $(this).attr('g');
        console.log(r);

        if (r == g) {
            //gagné
            $('#gobelet' + r + '').animate({top: "-150px"}, 'slow');
            document.getElementById('jeu-gagné').style.display = "block";
            $('jeu-gagné').show();

        } else {
            $('#gobelet' + r + '').animate({top: "-150px"}, 'slow');
            document.getElementById('jeu-perdu').style.display = "block";
            $('jeu-perdu').show();
        }

    })
}

var start = function () {

    randomInt = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    showItem(randomInt);
    verif(randomInt);



}

function animg1() {

    $('.g1').animate({left: "250px", top: "100px"});
    $('.g1').animate({scale: 8}, "-=.5");
    $('.g1').animate({scale: 1}, "-=.25");
    $('.g2').animate({left: "100px", top: "70px"}, "-=.5");
    $('.g2').animate({scale: 1.1}, "-=.5");
    $('.g2').animate({scale: 9}, "-=.25", animg2);
}

function animg2() {

    $('.g1').animate({left: "400px", top: "70px"});
    $('.g1').animate({scale: 1.1}, "-=.5");
    $('.g1').animate({scale: 9}, "-=.25");
    $('.g3').animate({left: "250px", top: "100px"});
    $('.g3').animate({scale: 8}, "-=.5");
    $('.g3').animate({scale: 1}, "-=.25", animg3);
}

function animg3() {
    $('.g2').animate({left: "250px", top: "100px"});
    $('.g2').animate({scale: 8}, "-=.5");
    $('.g2').animate({scale: 1}, "-=.25");
    $('.g3').animate({left: "100px", top: "70px"}, "-=.5");
    $('.g3').animate({scale: 1.1}, "-=.5");
    $('.g3').animate({scale: 9}, "-=.25", animg4);
}
function animg4() {


    $('.g2').animate({left: "400px", top: "70px"});
    $('.g2').animate({scale: 1.1}, "-=.5");
    $('.g2').animate({scale: 9}, "-=.25");
    $('.g1').animate({left: "250px", top: "100px"}, "-.5");
    $('.g1').animate({scale: 8}, "-=.5");
    $('.g1').animate({scale: 1}, "-=.25", animg5);
}

function animg5() {
//$('.g2').animate(zIndex= "9");
//$('.g1').animate(zIndex= "10");

    $('.g1').animate({left: "400px", top: "70px"});
    $('.g1').animate({scale: 1.1}, "-=.5");
    $('.g1').animate({scale: 9}, "-=.25");
    $('.g2').animate({left: "250px", top: "100px"});
    $('.g2').animate({scale: 8}, "-=.5");
    $('.g2').animate({scale: 1}, "-=.25", animg6);
}

function animg6() {
    $('.g3').animate({left: "250px", top: "100px"});
    $('.g3').animate({scale: 1.1}, "-=.5");
    $('.g3').animate({scale: 9}, "-=.25");
    $('.g2').animate({left: "100px", top: "70px"});
    $('.g2').animate({scale: 8}, "-=.5");
    $('.g2').animate({scale: 1}, "-=.25"), animg7;
}

function animg7() {
//$('.g3').animate(zIndex= "10");
//$('.g1').animate(zIndex= "9");

    $('.g3').animate({left: "400px", top: "70px"});
    $('.g3').animate({scale: 1.1}, "-=.5");
    $('.g3').animate({scale: 9}, "-=.25");
    $('.g1').animate({left: "250px", top: "100px"}, "-.5");
    $('.g1').animate({scale: 8}, "-=.5");
    $('.g1').animate({scale: 1}, "-=.25", animg8);
}

function animg8() {
//$('.g1').animate(zIndex= "10");
//$('.g2').animate(zIndex= "9");

    $('.g2').animate({left: "400px", top: "70px"});
    $('.g2').animate({scale: 1.1}, "-=.5");
    $('.g2').animate({scale: 9}, "-=.25");
    $('.g3').animate({left: "250px", top: "100px"}, "-=.5");
    $('.g3').animate({scale: 8}, "-=.5");
    $('.g3').animate({scale: 1}, "-=.25", animg9);
}

function animg9() {
//$('.g3').animate(zIndex= "10");
//$('.g1').animate(zIndex= "9");

    $('.g1').animate({left: "250px", top: "100px"}, "-.5");
    $('.g1').animate({scale: 8}, "-=.5");
    $('.g1').animate({scale: 1}, "-=.25");
    $('.g3').animate({left: "100px", top: "70px"}, "-=.5");
    $('.g3').animate({scale: 1.1}, "-=.5");
    $('.g3').animate({scale: 9}, "-=.25");
}


function swichPlaceRight(divRight, divMiddle, speed) {

    var bezier_params = {
        start: {x: 400, y: 70,angle: -400},
        end: { x: 255, y: 100,  angle: 40, length: 0.2 }
    }

    var bezier_params2 = {
        start: {x: 255, y: 100, angle: -400},
        end: { x: 400,y: 70, angle: 40,length: 0.2}
    }
    
    $(divRight).animate({path : new $.path.bezier(bezier_params)}, speed);
    $(divMiddle).animate({path : new $.path.bezier(bezier_params2)}, speed);
}

function swichPlaceLeft(divLeft, divMiddle, speed) {

    var bezier_params = {
        start: {x: 100, y: 70,angle: -400},
        end: { x: 255, y: 100,  angle: 40, length: 0.2 }
    }

    var bezier_params2 = {
        start: {x: 255, y: 100, angle: -400},
        end: { x: 100,y: 70, angle: 40,length: 0.2}
    }
    
    $(divLeft).animate({path : new $.path.bezier(bezier_params)}, speed);
    $(divMiddle).animate({path : new $.path.bezier(bezier_params2)}, speed);
}



