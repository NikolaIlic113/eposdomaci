$(document).ready(function() {
    let i = 0;
  
    $('#galerija div:gt(0)').hide();
  
    //Prethodna
    const prethodnaImg = function() {
      $('#galerija div:eq(' + i + ')').fadeOut(1000);
      i = (i == 0) ? 3 : i - 1;
      $('#galerija div:eq(' + i + ')').fadeIn(1000);
    };
  
    //Sledeca
    const sledecaImg = function() {
      $('#galerija div:eq(' + i + ')').fadeOut(1000);
      i = (i == 3) ? 0 : i + 1;
      $('#galerija div:eq(' + i + ')').fadeIn(1000);
    };
  
    $('#sledeca').click(sledecaImg);
    $('#prethodna').click(prethodnaImg);
  
    let si;
  
    $('#slideshow').click(function() {
      window.clearInterval(si);
      si = window.setInterval(function() {
        if (i == 3) {
          $('#galerija div:last').fadeOut(1000);
          $('#galerija div:first').fadeIn(1000);
          i = 0;
        } else {
          $('#galerija div:eq(' + i + ')')
            .fadeOut(1000)
            .next()
            .fadeIn(1000);
          ++i;
        }
      }, 2000);
  
      $(this).addClass('activebutton');
  
      $('#sledeca').off('click');
      $('#prethodna').off('click');
    });
  
    $('#stop').click(function () {
      // Brisemo stanje za slideshow
      window.clearInterval(si);
  
      // Vracamo dugme za slideshow u normalno stanje
      $('#slideshow').removeClass('activebutton');
  
      // Aktiviramo ostale dugmice
      $('#sledeca').click(sledecaImg);
      $('#prethodna').click(prethodnaImg);
    });
  
    
  
  });