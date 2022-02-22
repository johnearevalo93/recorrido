var panorama, panorama2, viewer, container, infospot; 

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama( 'estacion.png' );
panorama2 = new PANOLENS.ImagePanorama( 'estacion.png' );

// van
infospot = new PANOLENS.Infospot( 1300, "../img/puntos_panoramas/van.png" );
infospot.position.set( 4000, -200, -4200);
infospot.addHoverText( '1. Van'); 

// capacitaciones
infospot2 = new PANOLENS.Infospot(1000, "../img/puntos_panoramas/capacitaciones.png");
infospot2.position.set( 2000, 500, 500 ); 
infospot2.addHoverText( '4. Capacitaciones' );
infospot2.visible = false;

// incentivos
infospot3 = new PANOLENS.Infospot(800, "../img/puntos_panoramas/incentivos.png");
infospot3.position.set( 2000, -500, 500 );
infospot3.addHoverText( '3. Incentivos' );
infospot3.visible = false;

// lema
infospot4 = new PANOLENS.Infospot(1100, "../img/puntos_panoramas/lema.png");
infospot4.position.set( 3500, -300, -1500 );
infospot4.addHoverText( '2. Objetivo' );
infospot4.visible = false;






infospot.addEventListener( 'click', function(){	
	show2();
	van();
	
} );

infospot2.addEventListener( 'click', function(){	
	capacitaciones();
} );

infospot3.addEventListener( 'click', function(){	
	show4();
	programa();
	
} );

infospot4.addEventListener( 'click', function(){	
	show3();
	lema();
	
} );


panorama.add( infospot, infospot2, infospot3, infospot4);

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

function show2() {
            infospot4.visible = true;
        }
function show3() {
            infospot3.visible = true;
        }
function show4() {
            infospot2.visible = true;
        }    