$(window).on("load", sidenVises);

function sidenVises (){
$(".titelbillede").show();
    $(".titelbillede").on("click", start);
}


function start() {
    console.log("start");


    $(".videre_1").hide();
    $(".forfra").hide();
    $(".FB_send").hide();
    $(".FB_slet").hide();
    $(".sletter_1").hide();
    $(".question_1").hide();
    $(".sender").hide();

    $(".titelbillede").hide();

    $("#badev")[0].play();
    $("#badev")[0].volume=0.6;
    $("#pige_send_container").addClass("pige_position_out");
    $("#pige_slet_container").addClass("pige_position_out");
    $("#pige_container").addClass("pige_position_in");

    q1Ind();

}

function q1Ind() {
    console.log("q1Ind");

    $(".question_1").delay(2000).fadeIn();
    $(".sletter_1").delay(4000).fadeIn();
    $(".sender").delay(4000).fadeIn();

    $("#knap_send").addClass("pulse");
    $("#knap_slet_1").addClass("pulse");

    $("#knap_send").on("click", send);
    $("#knap_slet_1").on("click", pigeSletter);

}


function pigeSletter() {
    console.log("pigeSletter");

    $(".sletter_1").hide();
    $(".question_1").hide();
    $(".sender").hide();
    $("#pige_container").removeClass("pige_position_in");
    $("#pige_slet_container").removeClass("pige_position_out");
    $("#knap_send").removeClass("pulse");
    $("#knap_slet_1").removeClass("pulse");

    $("#pige_container").addClass("pige_position_out");
    $("#pige_slet_container").addClass("pige_position_in");
    $("#slet_sprite").addClass("slet_1");
    $(".FB_slet").delay(2000).fadeIn();
    $(".forfra").delay(4000).fadeIn();
    $("#knap_startForfra").addClass("pulse");

    $("#knap_startForfra").on("click", startForfra);
}

function startForfra() {
    console.log("startForfra");
    document.location="index.html";
}



function send() {
    console.log("send");

    $(".sletter_1").hide();
    $(".question_1").hide();
    $(".sender").hide();

    setTimeout(spilSendeLyd,2000);
    $("#pige_send_container").removeClass("pige_position_out");
    $("#pige_container").removeClass("pige_position_in");

    $("#pige_container").addClass("pige_position_out");
    $("#pige_send_container").addClass("pige_position_in");
    $("#send_sprite").addClass("send");
    $(".FB_send").delay(2000).fadeIn();
    $(".videre_1").delay(4500).fadeIn();

    $("#knap_videre_1").addClass("pulse");

    $("#knap_videre_1").on("click", flirtStart);
}

function spilSendeLyd() {
    console.log("spilSendeLyd");

    $("#sende_lyd")[0].play();
}


function flirtStart() {
    console.log("flirtStart");

    $(".videre_1").hide();
    $(".FB_send").hide();
    $("#pige_send_container").removeClass("pige_position_in");
    $("#send_sprite").removeClass("send");
    $("#knap_videre_1").removeClass("pulse");

    $("#pige_send_container").addClass("pige_position_out");
}
