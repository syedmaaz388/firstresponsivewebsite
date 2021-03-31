var nav = document.querySelector('.nav');


window.addEventListener('scroll' ,function(){
    if(this.window.scrollY > 600){
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.6)';
        nav.style.height = '70px';
    }
    else{
        nav.style.height = '90px';
        nav.style.boxShadow = 'none';
    }
})


document.querySelector('.nav').addEventListener('click', function(){
    document.querySelector('#slidingNavbar').style.left = '0';
});


document.querySelector('#closebtn').addEventListener('click', function(){
    document.querySelector('#slidingNavbar').style.left = '-100%';
});

