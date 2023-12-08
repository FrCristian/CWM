$(function(){


    $(document).ready(function(){
        $("a[href='#About']").on('click', function(e){
            e.preventDefault(); 
            alert("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
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

    

});


