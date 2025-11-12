$(window).load(function () {

    setTimeout(() => {
        $(".loader_container").fadeOut()
    }, 200);


    //gsap.to('.circulo', { rotation: 50, duration: 1, repeat: -1, ease: "sine.inOut()" })

    gsap.from('.logo', { y: -100, opacity: 0, duration: 0.8, delay: 0.6, ease: "elastic.out(1,0.6)" })
    gsap.from('.logoalcaldia', { y: -100, opacity: 0, duration: 0.6, ease: "sine.inOut()" })
    gsap.from('.caja', { y: -100, opacity: 0, duration: 0.4, delay: 0.6, ease: "sine.inOut()" })
    gsap.from('.titulo', { y: -80, opacity: 0, duration: 1, delay: 0.7, ease: "elastic.out(1,0.5)" })
    gsap.from('.boton', { y: -80, opacity: 0, duration: 1, delay: 0.8, ease: "elastic.out(1,0.5)" })
    gsap.from('.fondoverde', { y: 200, duration: 0.8, ease: "sine.inOut()" })

    //BUCARAMANGA
    $(".boton").hover(function () {
        gsap.to(this, { "background": "#30622A", "color": "#FFF", duration: 1, ease: "elastic.out(1,0.5)" })
    }, function () {
        gsap.to(this, { "background": "#FFF", "color": "#30622A", duration: 1, ease: "elastic.out(1,0.5)" })
    });





















});