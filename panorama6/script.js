var panorama, panorama2, viewer, container, infospot; 

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama( 'estacion.png' );
panorama2 = new PANOLENS.ImagePanorama( 'estacion.png' );

infospot = new PANOLENS.Infospot( 1200, "../img/puntos_panoramas/ambiental.png" );
infospot.position.set( 3500, 700, 1000);
infospot.addHoverText( 'Panel solar');




infospot.addEventListener( 'click', function(){	
	_enviarAlPadre();
	parent.revelaScrollNav();
} );



panorama.add( infospot);

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