function moveDot(reddot){ 
    reddot.style.position ='absolute'; 
    reddot.style.top = Math.floor(Math.random()*80+5)+'%'; 
    reddot.style.left = Math.floor(Math.random()*80+5)+'%'; 
};

let movingdiv = document.querySelector('#movingdiv'); 
movingdiv.addEventListener('mouseenter', function(e){ 
    moveDot(e.target);
});

let clickme = document.querySelector('#clickme');
clickme.addEventListener('click', function(e){
    document.getElementById('congrats').textContent = `You nailed it !`;
});


let mouseCursor = document.querySelector(".cursor");
window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}