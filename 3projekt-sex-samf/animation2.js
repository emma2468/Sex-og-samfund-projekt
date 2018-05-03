$(window).on("load", start);

function start() {
    console.log("start");

    $(".question_2").hide();
    $(".deler").hide();
    $(".sletter_2").hide();
    $(".FB_del").hide();
    $(".FB_slet_2").hide();
    $(".forfra").hide();

    $("#modtage_lyd_1")[0].play();
    $("#udenfor")[0].play();
    $("#udenfor")[0].loop = true;

    $("#mobil1_container").addClass("mobil1_position_out");
    $("#mobil2_container").addClass("mobil2_position_out");
    $("#mobil3_container").addClass("mobil3_position_out");
    $("#mobil4_container").addClass("mobil4_position_out");

    setTimeout(Sprite_start,1500);

}

    function Sprite_start() {
    console.log("Sprite_start");
        $("#screenshot_sprite").addClass("screenshot");
        $("#kamera_lyd")[0].play();


    q2Start();

    }


function q2Start() {
    console.log("q2Start");

    $(".question_2").delay(3000).fadeIn();
    $(".deler").delay(5000).fadeIn();
    $(".sletter_2").delay(5000).fadeIn();

    $("#knap_del").addClass("pulse");
    $("#knap_slet_2").addClass("pulse");

    $("#knap_del").on("click", del);
    $("#knap_slet_2").on("click", drengSletter);

}

function del() {
    console.log("del");

    $(".question_2").hide();
    $(".deler").hide();
    $(".sletter_2").hide();
    $("#knap_del").removeClass("pulse");
    $("#knap_slet_2").removeClass("pulse");

    $("#sende_lyd")[0].play();
        setTimeout(mobilerInd,1500);

}

function mobilerInd() {
    console.log("mobilerInd");

    $("#mobil1_container").addClass("mobil1");
    $("#mobil2_container").addClass("mobil2");
    $("#mobil3_container").addClass("mobil3");
    $("#mobil4_container").addClass("mobil4");

    $(".FB_del").delay(2000).fadeIn();
    $(".forfra").delay(4000).fadeIn();
    $("#knap_startForfra").addClass("pulse");

    $("#modtage_lyd_2")[0].play();
    $("#knap_startForfra").on("click", startForfra);
}

function startForfra() {
    console.log("startForfra");
    document.location="index.html";

}


function drengSletter() {
    console.log("drengSletter");

    $(".question_2").hide();
    $(".deler").hide();
    $(".sletter_2").hide();
    $("#knap_del").removeClass("pulse");
    $("#knap_slet_2").removeClass("pulse");

    $(".FB_slet_2").delay(2000).fadeIn();
    $(".forfra").delay(4000).fadeIn();
    $("#knap_startForfra").addClass("pulse");
    $("#knap_startForfra").on("click", startForfra);

}
