$(window).load(function () {

    $(".loader").fadeOut()
    var altura = $(window).height()
    mapa()

    function mapa() {
        $('#mapa').mapplic({
            source: 'mapa.json',
            height: altura,
            animate: true,
            mapfill: true,
            sidebar: true,
            minimap: true,
            deeplinking: true,
            fullscreen: true,
            hovertip: true,
            developer: false,
            maxscale: 3
        });
    }


});