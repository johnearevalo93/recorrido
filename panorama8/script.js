var panorama, panorama2, viewer, container, infospot; 

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama( 'estacion.png' );
panorama2 = new PANOLENS.ImagePanorama( 'estacion.png' );

infospot = new PANOLENS.Infospot( 1400, "../img/puntos_panoramas/lema.png"  );
infospot.position.set( 3200, 0, -900);
infospot.addHoverText( '1. Local comercial');

infospot2 = new PANOLENS.Infospot(700, "../img/puntos_panoramas/oficina.png" );
infospot2.position.set( 1500, -200, 1500 );
infospot2.addHoverText( '2. Oficina' );
infospot2.visible = false;

infospot3 = new PANOLENS.Infospot(600, "../img/puntos_panoramas/banos.png" );
infospot3.position.set( 1500, -200, 3550 );
infospot3.addHoverText( '3. Baños' );
infospot3.visible = false;




infospot.addEventListener( 'click', function(){
   ver_oficina();	
	van();
} );

infospot2.addEventListener( 'click', function(){
ver_banos();	
	capacitaciones();
} );

infospot3.addEventListener( 'click', function(){	
	programa();
} );



panorama.add( infospot, infospot2, infospot3);

infospot = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospot.position.set( 3000, -500, -5000 );
infospot.addHoverText( "" );
infospot.addEventListener( 'click', function(){
	culo2();

	// _enviarAlPadre();
  // window.open("https://www.hslu.ch","_blank");
} );

panorama2.add( infospot );

viewer = new PANOLENS.Viewer( { container: container } );
viewer.add( panorama, panorama2 );

viewer.addUpdateCallback(function(){
  
});

function ver_oficina() {

            infospot2.visible = true;

        }
function ver_banos() {

            infospot3.visible = true;

        }        