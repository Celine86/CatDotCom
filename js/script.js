function moveDot(reddot){ 
    reddot.style.position ='absolute'; 
    reddot.style.top = Math.floor(Math.random()*90+5)+'%'; 
    reddot.style.left = Math.floor(Math.random()*90+5)+'%'; 
} 
    var movingdiv = document.querySelector('#movingdiv'); 
    movingdiv.addEventListener('mouseenter', function(e){ 
        moveDot(e.target);
    });
    var clickme = document.querySelector('#clickme');
    clickme.addEventListener('click', function(e){
        document.getElementById('congrats').textContent = `You nailed it !`;
    });