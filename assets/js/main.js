/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 


function myfunction(){
    document.getElementById("id1").setAttribute("color","aqua");
    document.getElementById("id1").innerHTML="Thanks for contacting us.We'll reach you shortly!";
}


function myfunction1(){
    var x = document.getElementById("mytext1").value;
    var regexp= /^[a-zA-Z]+\s[a-zA-Z]+$/;
    var bool = regexp.test(x);
    if (bool==true){
        document.getElementById("id1").setAttribute("color","blue");
        document.getElementById("id1").innerHTML="you entered correct name";
    }else{
        document.getElementById("id1").setAttribute("color","red");
        document.getElementById("id1").innerHTML="you entered wrong name";
        alert("Valid Format FirstName LastName ");
    }
}

function myfunction2(){
    var x = document.getElementById("mytext2").value;
    var regexp= /^[a-zA-Z][_|a-zA-Z|0-9]+\@([a-z]{2,5})\.(com|edu|net|in)$/;
    var bool = regexp.test(x);
    if (bool==true){
        document.getElementById("id1").setAttribute("color","blue");
        document.getElementById("id1").innerHTML="you entered correct email";
    }else{
        document.getElementById("id1").setAttribute("color","red");
        document.getElementById("id1").innerHTML="you entered wrong email";
        alert("Valid format userName@abc.domain valid domains (edu,com,net,in)");
        alert = function() {};
    }
}

function myfunction3(){
    var x = document.getElementById("mytext3").value;
    var regexp= /^\d{10}$/;
    var bool = regexp.test(x);
    if (bool==true){
        document.getElementById("id1").setAttribute("color","blue");
        document.getElementById("id1").innerHTML="you entered correct number";
    }else{
        document.getElementById("id1").setAttribute("color","red");
        document.getElementById("id1").innerHTML="you entered wrong number";
        alert("Valid format 999999XXXX");
    }
}

