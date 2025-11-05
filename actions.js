$(window).load(function () {

    setTimeout(() => {
        $(".loader").fadeOut()
    }, 500);


    //gsap.to('.circulo', { rotation: 50, duration: 1, repeat: -1, ease: "linear" })

    gsap.to('.logo1', { "top": "20px", duration: 1, delay: 1, ease: "sine.inOut()" })
    gsap.from('.caja', { y: 50, opacity: 0, duration: 0.5, delay: 1.5, ease: "sine.inOut()" })
    gsap.from('.caja_boton', { y: 50, opacity: 0, duration: 0.5, delay: 1.5, ease: "sine.inOut()" })
    gsap.from('.footer', { y: 50, opacity: 0, duration: 0.5, delay: 1.5, ease: "sine.inOut()" })
    gsap.from('.logos', { y: 20, opacity: 0, duration: 0.5, delay: 1.5, stagger: 0.15, ease: "sine.inOut()" })

    gsap.from('.subtitulo', { y: 50, opacity: 0, duration: 0.5, delay: 0.3, ease: "sine.inOut()" })
    gsap.from('.texto', { y: 50, opacity: 0, duration: 0.5, delay: 0.4, ease: "sine.inOut()" })
    gsap.from('.boton', { x: 50, opacity: 0, duration: 0.5, delay: 0.4, stagger: 0.1, ease: "sine.inOut()" })

    gsap.from('.mapas', { opacity: 0, duration: 0.5, delay: 0.1, ease: "sine.inOut()" })
    gsap.from('.pin', { y: -50, opacity: 0, duration: 0.6, delay: 0.5, stagger: 0.15, ease: "elastic.out(1,0.6)" })


    //BUCARAMANGA
    $(".caja_boton").hover(function () {
        gsap.to(this, { scale: 1.05, "background": "#ffbc07", duration: 1, ease: "elastic.out(1,0.5)" })
    }, function () {
        gsap.to(this, { scale: 1, "background": "#ff880e", duration: 1, ease: "elastic.out(1,0.5)" })
    });





















});