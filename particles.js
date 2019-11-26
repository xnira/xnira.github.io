var canvas, ctx, particles = [];
var breakdist, repeldist, particleamount = Math.floor(window.innerWidth/21);

function init(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth; canvas.height = window.innerHeight * .995;

    repeldist = Math.max(canvas.width, canvas.height) / 8;
    breakdist = Math.max(canvas.width, canvas.height) / 10;

    while (particles.length < particleamount) {
        particles.push([
            [Math.random()*canvas.width, Math.random()*canvas.height],
            [Math.random()*10-5, Math.random()*10-5]
        ]);
    }

    var interval = setInterval(function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawparticles();
    }, 60);

}

function drawparticles(){
    for (var i = 0; i < particles.length; i++) {
        var iposx = particles[i][0][0];
        var iposy = particles[i][0][1];
        for (var j = i + 1; j < particles.length; j++) {
            var jposx = particles[j][0][0];
            var jposy = particles[j][0][1];
            var dist = Math.sqrt(Math.pow((iposx - jposx), 2) + Math.pow((iposy - jposy), 2));

            ctx.strokeStyle = 'hsl(' + iposx*(canvas.width/(360*15))+5 + ',100%,50%)';

            if (dist <= breakdist) {
                ctx.beginPath();
                ctx.moveTo(iposx, iposy);
                ctx.lineTo(jposx, jposy);
                ctx.stroke();
                ctx.closePath();
            }else if (dist <= (breakdist + (breakdist/5))){
                ctx.beginPath();
                ctx.globalAlpha = Math.abs((breakdist - dist)/100);
                ctx.moveTo(iposx, iposy);
                ctx.lineTo(jposx, jposy);
                ctx.stroke();
                ctx.globalAlpha = 1;
                ctx.closePath();
            }
        }
        particles[i][0][0] += particles[i][1][0];
        particles[i][0][1] += particles[i][1][1];

        if ((particles[i][0][0] >= canvas.width) || (particles[i][0][0] <= 0)){
            particles[i][1][0] = (particles[i][1][0] * -1);
        }
        if ((particles[i][0][1] >= canvas.height) || (particles[i][0][1] <= 0)){
            particles[i][1][1] = (particles[i][1][1] * -1);
        }
        ctx.beginPath();
        ctx.fillStyle = "#ffffff";
        ctx.arc(particles[i][0][0], particles[i][0][1], 3, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();
    }
}