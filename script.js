var counter=1;
var slide1=document.getElementById("slide1");
slide1.style.opacity ="1";
function rotate_right(){
    counter++;
    var slide1=document.getElementById("slide1");
    var slide2=document.getElementById("slide2");
    let slide3=document.getElementById("slide3");
    if(counter==2){
        slide1.style.position = "0";
        slide3.style.opacity = "0";
        slide2.style.opacity = "1";
    }
    else if(counter==3){
        slide1.style.opacity = "0";
        slide3.style.opacity = "1";
        slide2.style.opacity = "0";
    }
    else if(counter==1){
        slide1.style.opacity = "1";
        slide3.style.opacity = "0";
        slide2.style.opacity = "0";
    }
    else if(counter==4){
        counter=1;
        slide1.style.opacity = "1";
        slide3.style.opacity = "0";
        slide2.style.opacity = "0";
    }
    console.log(counter);

}
function rotate_left(){
    counter--;
    var lslide1=document.getElementById("slide1");
    var lslide2=document.getElementById("slide2");
    let lslide3=document.getElementById("slide3");

    if(counter==1){
        lslide1.style.opacity = "1";
        lslide3.style.opacity = "0";
        lslide2.style.opacity = "0";
    }
    else if(counter==2){
        lslide1.style.opacity = "0";
        lslide2.style.opacity = "1";
        lslide3.style.opacity = "0";
    }
    else if(counter==3){
        lslide1.style.opacity = "0";
        lslide2.style.opacity = "0";
        lslide3.style.opacity = "1";
    }
    else if(counter<=0){
        counter=3;
        lslide1.style.opacity = "0";
        lslide2.style.opacity = "0";
        lslide3.style.opacity = "1";
    }
    console.log(counter)

}
