function moveDot(reddot){ 
    reddot.style.position ='absolute'; 
    reddot.style.top = Math.floor(Math.random()*80+5)+'%'; 
    reddot.style.left = Math.floor(Math.random()*80+5)+'%'; 
};

document.querySelector('#movingdiv').addEventListener('mouseenter', function(e){ 
    moveDot(e.target);
});

document.querySelector('#clickme').addEventListener('click', function(e){
    document.getElementById('congrats').textContent = `You nailed it !`;
});

window.addEventListener('mousemove', cursor);
function cursor(e) {
    document.querySelector(".cursor").style.top = e.pageY + "px";
    document.querySelector(".cursor").style.left = e.pageX + "px";
}