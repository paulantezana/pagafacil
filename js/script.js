(function menuM(){
  var menu=document.getElementById('menu'),
      mMenu=document.getElementById('mostrarMenuMovil'),
      estado=0;
  var menuleft=function(){
    if(estado===0){
      menu.style.left="0";
      estado=1;
    }else if (estado===1) {
      menu.style.left="-100%";
      estado=0;
    }
  };
  mMenu.addEventListener('click',menuleft);
  addEventListener('touchstart',function(){
    addEventListener('touchmove',function(e){
      estado=0;
      if(e.pageX>20){
        menu.style.left="0";
        estado=1;
      }else if(e.pageX<20){
        menu.style.left="-100%";
        estado=0;
      }
    });
  });
})();

//:::::::::::Funcion Para el submenu::::::::::::
(function desplegar(){
  var link=document.getElementById('resJS'),
      desple=document.getElementById('hideJS'),
      estado=0;
  link.addEventListener('click',function(e){
    if(estado==0){
      desple.style.maxHeight='500px';
      estado=1;
    }else if (estado==1) {
      desple.style.maxHeight='0';
      estado=0;
    }
    e.preventDefault();
  });
})();
//finalizando el menu

  // var HP = document.getElementById('prestamo');
  // var HL = document.getElementById('prestamoLeft');
  // var HR = document.getElementById('prestamoRight');
  // var documentWidth = innerWidth;
  // if(documentWidth>=760){
  //   var prestamoHeight = HR.clientHeight;
  //   HL.style.height=prestamoHeight + 'px';
  //   addEventListener('resize',function(){
  //     var prestamoHeight = HR.clientHeight;
  //     HL.style.height=prestamoHeight + 'px';
  //   });
  // }
  // HL.style.background="red";
  //finalizando scripts de prestamos

if(innerWidth<480){
  $('.autoplaySocios').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
  });
}else if(innerWidth>480 && innerWidth<870){
  $('.autoplaySocios').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
  });
}else{
  $('.autoplaySocios').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
  });
}
