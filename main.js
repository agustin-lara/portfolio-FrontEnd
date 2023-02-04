"use strict";

window.onload = () => {

    /*
    ===============  |SCROLL REVEAL|  ================
    ==================================================
    */
    let revealList = document.querySelectorAll('.reveal');
    let revealCount = 0;
    function reveal(){
        if (revealCount < revealList.length){
            if (150 < window.innerHeight - revealList[revealCount].getBoundingClientRect().top){
                revealList[revealCount].classList.add('active');
                revealCount++;
            }
        }
    }

    for(let i = 0; i < revealList.length; i++){
        reveal();
    }
    window.addEventListener('scroll', reveal);

    /*
    ===============  |SCROLL PROGRESS|  ================
    ==================================================
    */
    let progressList = document.querySelectorAll('.bar');
    let progressCount = 0;
    function progress(){
        if (progressCount < progressList.length){
            if (150 < window.innerHeight - progressList[progressCount].getBoundingClientRect().top){
                progressList[progressCount].classList.add('bar-active');
                progressCount++;
            }
        }
    }

    for(let i = 0; i < progressList.length; i++){
        progress();
    }
    window.addEventListener('scroll', progress);

    /*
    ===========  |HEADER COLOR ON SCROLL|  ===========
    ==================================================
    */
    const header = document.querySelector('.header');
    const aboutSection = document.querySelector('.about-section');
    window.addEventListener('scroll',function(){
        if (window.scrollY > (aboutSection.clientHeight/5)) {
            header.classList.add('header-dark');
        } else {
            header.classList.remove('header-dark');
        }
    });

}