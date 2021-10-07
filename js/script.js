function moveDot(reddot){ 
    reddot.style.position ='absolute'; 
    reddot.style.top = Math.floor(Math.random()*90+5)+'%'; 
    reddot.style.left = Math.floor(Math.random()*90+5)+'%'; 
} 
    var movingreddot = document.querySelector('#clickme'); 
    movingreddot.addEventListener('mouseenter', function(e){ 
        moveDot(e.target);
    });
    movingreddot.addEventListener('click', function(e){
        document.getElementById('congrats').textContent = `You nailed it !`;
    });