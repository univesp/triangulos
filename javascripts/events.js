$(document).ready(function(){

  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

    $(window).scroll(function(){
      var nav = $(".header-dinamico .container");
      var scroll = $(window).scrollTop();
      if(scroll == 0){
        nav.fadeIn();
      } else {
        nav.fadeOut();
      }
    });

  //////////////////////////////////////////////////////////////////

  let ancMenu = document.querySelectorAll("#menu a");
  
  for (let i = 0; i < ancMenu.length; i++) {
    ancMenu[i].addEventListener('mouseover', fnAncMenuOver);
    ancMenu[i].addEventListener('mouseout', fnAncMenuOut);
  }

  function fnAncMenuOver(){
    let span = this.querySelector('span');
    this.style.border = "1px solid #e5ca8f"
    span.style.backgroundColor = '#e5ca8f';
  }
  function fnAncMenuOut(){
    let span = this.querySelector('span');
    this.style.border = "1px solid #e5ddc8"
    span.style.backgroundColor = '#e5ddc8';
  }

})
