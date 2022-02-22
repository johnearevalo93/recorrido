var preload;
var slides = 52;
var cont;
/*Modal*/
var can_mod_dia = 0;
var ind_mod_dia = 0;
var id_mod_act = '';

/*audio*/
var audioActual = '';

function main(){

	if (preload != null) {preload.close();}

    preload = new createjs.LoadQueue(true);
    preload.addEventListener("error", loadError);
    preload.addEventListener("progress", handleFileProgress);
    preload.addEventListener("fileload", handleFileLoad);
    preload.addEventListener("complete", loadComplete);
    preload.loadManifest(manifest_route);

}

function handleFileProgress(event) {
	var porcentaje = preload.progress*100|0;
    $("#progress>div").attr("aria-valuenow", porcentaje);
}

function handleFileLoad(event){
    console.log("A file has loaded of type: " + event.item.type);
    switch(event.item.id){
        case 'image1':
            
        break;
        case 'image2':
            
        break;                  
    }
}

function loadError(evt) {
    console.log("Error!",evt.text);
}

function loadComplete(event) {
    $("#progress").remove();
   	initEvent();
    cargaHtml();
}

function initEvent(){
    $(document).on("click", "#navbar-toggler", menuToggle);
    $(document).on("click", ".menu a", menu);
    $(document).on("click", "#navbar-next", menuNext);
    $(document).on("click", "#navbar-back", menuBack);
    $(document).on("click", ".evt-modal", openModal);
    $(document).on("click",".modal-template__back, .modal-template__next",eventModalWindow);
    $(document).on('hide.bs.modal', closeModal);
    $(document).on('click', '.audio', audio);
}

function cargaHtml(){

    $("#navbar-back").css('visibility', 'hidden');
    $("#navbar-next").css('visibility', 'hidden');

    if(cont < slides)
        $("#navbar-next").css('visibility', 'visible');
    if(cont > 1)
        $("#navbar-back").css('visibility', 'visible');

    $('#container-content')
        .fadeOut(200, function() {

            $('#container-content').empty();

            $.ajax( "html/" + cont + ".html?=" + (new Date()).getTime())
                .done(function() {
                    console.log( "success" );
                })
                .fail(function() {
                    console.log( "error" );
                })
                .always(function(data) {

                    audioActual = '';

                    stopMedia();

                    $('#container-content').fadeIn(200, function() {
                        $('#container-content').html(data);
                    });

                    
                });

        });
}

function menuToggle(){
    var mleft = $('.container-menu-lateral').css("margin-left")==("0px")?"-"+$('.container-menu-lateral').width()+"px":"0px";

    $('.container-menu-lateral').animate({marginLeft: mleft},{
        easing: "swing",
        duration: 200,
        complete: function() {

        }
    });
    
}

function menu(){
    if(cont != parseInt($(this).data("ref"))){
        $(".menu a.active").removeClass('active');
        $(this).addClass('active');
        cont = parseInt($(this).data("ref"));
        cargaHtml();
    }
}

function menuNext(){
    if(cont == slides)
        return

    cont++;
    cargaHtml();
}

function menuBack(){
    if(cont == 1)
        return

    cont--;
    cargaHtml();
}

function openModal(){

    id_mod_act = $(this).attr("data-target");
    $(id_mod_act + " .modal-template__next").hide();
    $(id_mod_act + " .modal-template__back").hide();

    can_mod_dia = $(id_mod_act + " .modal-template__slide").length;
    ind_mod_dia = 0;

    if(can_mod_dia>1)
        $(id_mod_act + " .modal-template__next").show();

    showSlide(0);
    if($(this).attr("data-ref") == "test-final" || $(this).attr("data-ref") == "modal-test"){

        if($(this).attr("data-ref") == "test-final")
            answer = ["4*4","0*0","1","[1,3,2]","[1,2,3]"];
        else
            answer = ["3","1","1","0","1"];

        type_act = [];
        rta_user = [];
        cont_pag = 1;
        flagview = false;
        cant_pag = $('.modal-template__slide').find('.pag').length - 2;
        cont_drop = 0;
        cadena_drop = [];

        $('.modal-template__slide').find('.btn-nav').hide();
        $('.modal-template__slide').find('.pag').eq(cont_pag - 1).fadeIn();

        for(var i = 0; i < cant_pag; i++){
            rta_user[i] = "";
            type_act[i] = "";
        }

        if($('.modal-template__slides').find('.pag').eq(cont_pag - 1).find('.dragdropuau').length == 1)
            dragDrop();

    }
}

function eventModalWindow(){
    $(id_mod_act + " .modal-template__next").hide();
    $(id_mod_act + " .modal-template__back").hide();

    if ( $(this).hasClass("modal-template__next") ) {
        if ( ind_mod_dia < can_mod_dia ) {
            ind_mod_dia++;
        }
    }
    else {
        if ( ind_mod_dia > 0 ) {
            ind_mod_dia--;
        }
    }

    showSlide(ind_mod_dia);
}

function showSlide(idx) {

    $(id_mod_act + " .modal-template__slide").css("visibility","hidden");
    $(id_mod_act + " .modal-template__slide").eq(idx).css("visibility","visible");

    if(idx < can_mod_dia - 1)
        $(id_mod_act + " .modal-template__next").show();
    if(idx > 0)
        $(id_mod_act + " .modal-template__back").show();

}

function closeModal(){
    console.log('cerro modal');
}

function audio(){

    stopMedia();

    if($(this).attr('data-audio') != audioActual){
        $("#audio").empty();
        var html = '';
        html += '<source src="' + $(this).attr('data-audio') + '.mp3?t=' + (new Date().getTime()) + '" type="audio/mpeg">';
        html += '<source src="' + $(this).attr('data-audio') + '.ogg?t=' + (new Date().getTime()) + '" type="audio/ogg">';

        $("#audio").html(html);

        audioActual = $(this).attr('data-audio');

        $(this).addClass('icon-pause');
        $(this).removeClass('icon-play');
        $("#audio").get(0).play();
    }
    else{

        if($(this).hasClass('icon-play')){
            $(this).addClass('icon-pause');
            $(this).removeClass('icon-play');
            $("#audio").get(0).play();
        }
        else{
            $(this).addClass('icon-play');
            $(this).removeClass('icon-pause');
            $("#audio").get(0).pause();
        }

    }
        
}

function stopMedia(){
    $('video, audio').each(function(index, item) {
        item.pause();
    });
}

function cierraInstruccion(elemento) {
   $(elemento).hide();
}

/*---- GLOBALES SCROLL -----*/
var currentSectionIndex;
var diapo_final;
var sections;
var videosYT;
var puede_wheel;
var instruccionScroll;
var controlScroll;
var correcto_b;


/*---- CONTENIDOS INFO ---*/
//--------GLOBALES--------------
var totalesInfo;
var objTotales;
var contenidoTotal;
var infoActual;
var bulletActual;
var contenidoInfo;
var imagenInfo;
var carpetaInfo;
/*---------CARGA INFO-------*/
function infogrf(num,sub) {
   if (eval(bulletActual-1) - sub < 0) {
       infoActual = num;
       bulletActual = sub+1;
       imagenInfo = eval("imgInfo"+num+"["+sub+"]");
       contenidoInfo = eval("info"+num+"_txt"+bulletActual);
       document.getElementById("infografia"+num).innerHTML = "<div class='contenedorGaleria opacidad95'><div class='areaLateral slide-in-blurred-top' id='areaL_1'><img src="+imagenInfo+"></div><div class='areaCentral' id='menuInfo'>&nbsp;</div><div class='areaLateral slide-in-blurred-bott' id='areaL_2'>Aquí el texto</div></div>";

       document.getElementById("areaL_2").innerHTML = contenidoInfo;
   } else if (eval(bulletActual-1) - sub >= 0) {
       infoActual = num;
       bulletActual = sub+1;
       imagenInfo = eval("imgInfo"+num+"["+sub+"]");
       contenidoInfo = eval("info"+num+"_txt"+bulletActual);
       document.getElementById("infografia"+num).innerHTML = "<div class='contenedorGaleria opacidad95'><div class='areaLateral slide-in-blurred-bott' id='areaL_1'><img src="+imagenInfo+"></div><div class='areaCentral' id='menuInfo'>&nbsp;</div><div class='areaLateral slide-in-blurred-top' id='areaL_2'>Aquí el texto</div></div>";

       document.getElementById("areaL_2").innerHTML = contenidoInfo;
   }
   
   var bulletsTotales = eval("menuInfo"+num);
   for (bi = 0; bi < bulletsTotales; bi++) {
       document.getElementById("menuInfo").innerHTML += ("<div class='iconoGaleria iconoI"+num+"menu"+bi+"' style='background-image: url(../img/punto"+carpetaInfo+"/info"+num+"/menu"+eval(bi+1)+".png)' id='bullet"+bi+"' onclick='infogrf("+num+","+bi+")'>&nbsp;</div>");        
   }
   
   document.getElementById("bullet"+sub).classList.add("iconoGaleriaActivo");
}

function bubble() {
    var sndBbl = document.getElementById("myAudio"); 
    sndBbl.play(); 
} 

function pausebubble() { 
  sndBbl.pause(); 
} 