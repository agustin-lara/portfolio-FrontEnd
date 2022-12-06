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

}