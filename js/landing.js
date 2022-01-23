var slide = 0;
carousel();

function carousel(n){
    var i;
    var images = document.getElementsByClassName("carousel_img");
    for (i = 0; i < images.length; i++){
        images[i].style.display = "none";
    };
    slide++;
    if (slide > images.length){
        slide = 1;
    }
    images[slide - 1].style.display = "block";
};

setInterval(carousel, 3500);
