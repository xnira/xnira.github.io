/*function displace(r1, r2, g1, g2, b1, b2){
    var rid = document.getElementById("r");
    var gid = document.getElementById("g");
    var bid = document.getElementById("b");
    var xoff = (-50);
    var yoff = (-55);
    rid.style.transform = "translateX(" + (xoff + r1) + "%) translateY(" + (yoff + r2) + "%)";
    gid.style.transform = "translateX(" + (xoff + g1) + "%) translateY(" + (yoff + g2) + "%)";
    bid.style.transform = "translateX(" + (xoff + b1) + "%) translateY(" + (yoff + b2) + "%)";
}
displace(1, -1, 0, 0, -1, 1);
window.onmousemove = function (){
    var xmid = window.event.clientX - (window.innerWidth/2);
    var ymid = window.event.clientY - (window.innerHeight/2);
    displace(xmid/(window.innerWidth/2)*-1.5, ymid/(window.innerHeight/2)*-3, 0, 0, xmid/(window.innerWidth/2)*1.5, ymid/(window.innerHeight/2))*3;
}*/
displace();

function displace(e){
    if (e != undefined){
        var rads = Math.atan2(e.clientY - window.innerHeight/2, e.clientX - window.innerWidth/2);
    }else{
        var rads = Math.atan2(0 - window.innerHeight/2, 0 - window.innerWidth/2);
    }
    var disx = Math.cos(rads)/2;
    var disy = Math.sin(rads);

    var r = document.getElementById("r");
    var g = document.getElementById("g");
    var b = document.getElementById("b");
    r.style.transform = "translateX(" + (disx*2 - 50) + "%) translateY(" + (disy*-2 - 55) + "%)";
    g.style.transform = "translateX(" + (disx*.5 - 50) + "%) translateY(" + (disy*.5 - 55) + "%)";
    b.style.transform = "translateX(" + (disy*-2 - 50) + "%) translateY(" + (disx*2 - 55) + "%)";
}

window.onmousemove = function (){
    displace(event);
};