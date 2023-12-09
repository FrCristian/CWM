$(function(){


    $(document).ready(function(){
        $("a[href='#About']").on('click', function(e){
            e.preventDefault(); 
            alert("Somos una familia que hacemos posible que nuestros clientes de todo el mundo se expresen a través de la moda y el diseño de forma sostenible.");
        });
    });



    $(document).ready(function(){
        $(".carousel-item a.btn-liquidacion").on('click', function(e){
            e.preventDefault(); // Evitar que el enlace siga su comportamiento normal
            window.location.href = "#collection";
        });
    });


    $(document).ready(function(){
        $("a[href='#Contacts']").on('click', function(e){
            e.preventDefault(); // Evitar que el enlace siga su comportamiento normal
            
            var whatsappLink = 'https://wa.link/29la8b';

            window.open(whatsappLink, '_blank');
        });
    });
    

    $(document).ready(function(){
        $(".collection-list .collection-img img").hover(function(){
            $(this).css('border', '2px solid #722F37'); // Cambiar el color a tu preferencia
        }, function(){
            $(this).css('border', 'none'); 
        });
    });

    $(document).ready(function(){
        $("a[href='#Direccion']").on('click', function(e){
            e.preventDefault(); // Evitar que el enlace siga su comportamiento normal
            
            var whatsappLink = 'https://www.google.com/maps/place/Asunci%C3%B3n+999,+Comas+15312/@-11.9500057,-77.0548422,17z/data=!4m6!3m5!1s0x9105d02a478dae73:0x630904dfe35204a7!8m2!3d-11.9502734!4d-77.0521814!16s%2Fg%2F11l331mj2v?entry=ttu';

            window.open(whatsappLink, '_blank');
        });
    });

    // Boton busqueda
    document.getElementById('search-icon').addEventListener('click', function() {
        var searchBar = document.getElementById('search-bar');
        if (searchBar.style.display === 'none') {
            searchBar.style.display = 'block';
            searchBar.focus();
        } else {
            searchBar.style.display = 'none';
        }
    });


    // Obtén el modal
   var modal = document.getElementById("aboutModal");

    // Obtén el botón que abre el modal
   var btn = document.getElementById("aboutBtn");

   // Obtén el elemento <span> que cierra el modal
   var span = document.getElementsByClassName("close")[0];

   // Cuando el usuario haga clic en el botón, abre el modal 
   btn.onclick = function(event) {
   event.preventDefault(); // Evita que el enlace haga scroll a la sección "#About"
   modal.style.display = "block";
   }

   // Cuando el usuario haga clic en <span> (x), cierra el modal
   span.onclick = function() {
   modal.style.display = "none";
   }  
   // Cuando el usuario haga clic en cualquier lugar fuera del modal, cierra el modal
   window.onclick = function(event) {
   if (event.target == modal) {
    modal.style.display = "none";
  }
}
});


