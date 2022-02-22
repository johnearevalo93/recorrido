var panorama, panorama2, viewer, container, infospot; 

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama( 'estacion.png' );
panorama2 = new PANOLENS.ImagePanorama( 'estacion.png' );

infospot = new PANOLENS.Infospot( 1000, "../img/puntos_panoramas/emergencias.png"  );
infospot.position.set( 4000, -1000, 3000);
infospot.addHoverText( 'Emergencias');

infospot2 = new PANOLENS.Infospot(800, "../img/puntos_panoramas/derrames.png" );
infospot2.position.set( 1000, 100, 3000 );
infospot2.addHoverText( '' );




infospot.addEventListener( 'click', function(){	
	_enviarAlPadre();
	parent.revelaScrollNav();
} );

infospot2.addEventListener( 'click', function(){	
	surtidor();
// viewer.setPanorama( panorama2 );


} );

panorama.add( infospot );

infospot = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospot.position.set( 2999, -500, -5000 );
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