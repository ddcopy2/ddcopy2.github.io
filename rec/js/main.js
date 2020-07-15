let burger = document.getElementById('nav-burger');
let group = document.getElementById('nav-group');

burger.addEventListener('click', () =>{
  burger.classList.toggle('nav-burger--animation');
  group.classList.toggle('nav-group--animation');
});
function scrollHeader(){
  let header = document.getElementById('header');
  let main = document.getElementById('main').offsetTop;

  let headerHeight = header.offsetHeight;
  let scrollUnit = main - headerHeight;

  addEventListener('scroll', () => {
    if(scrollY >= scrollUnit){
      header.classList.add('bg-header');
    }else{
      header.classList.remove('bg-header');
    }
  });
}

scrollHeader();




let toggle = document.getElementById('btn-toggle');
let body = document.getElementById('body');
let poster = document.getElementById('poster-home');

toggle.addEventListener('click', () => {
  if(body.classList.contains('light-mode')){

    body.classList.remove('light-mode');
    poster.classList.remove('poster-light');

    body.classList.add('dark-mode');
    poster.classList.add('poster-dark');
  }else{

    body.classList.remove('dark-mode');
    poster.classList.remove('poster-dark');

    body.classList.add('light-mode');
    poster.classList.add('poster-light');
  }
});