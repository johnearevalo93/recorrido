var panorama, viewer, container, infospot; 

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama( '../img/estacion.png' );
panorama.position.set(400,-1500,0);

infospot = new PANOLENS.Infospot( 700, "../img/puntos_panoramas/introduccion.png");
infospot.position.set( 5000, -1500, -800);
infospot.addHoverText( '1. Introducción', 60);


infospot2 = new PANOLENS.Infospot( 800, "../img/puntos_panoramas/friccion.png");
infospot2.position.set( 5000, -500, 50);
infospot2.addHoverText( '2. Rozamiento y fricción', 60);
infospot2.visible = false;

infospot3 = new PANOLENS.Infospot( 800, "../img/puntos_panoramas/viscosidad.png");
infospot3.position.set( 5000, 200, 1100);
infospot3.addHoverText( '3. Viscosidad caracteristicas de un lubricante', 60);
infospot3.visible = false;

infospot4 = new PANOLENS.Infospot( 1000, "../img/puntos_panoramas/lubricantes.png");
infospot4.position.set( 5000, 600, 2500);
infospot4.addHoverText( '4. Composicion de un aceite lubricantes', 60);
infospot4.visible = false;

infospot5 = new PANOLENS.Infospot( 800, "../img/puntos_panoramas/api.png");
infospot5.position.set( 4500, 100, 3100 );
infospot5.addHoverText( '5. Clasificación segun API', 60);
infospot5.visible = false;

infospot6 = new PANOLENS.Infospot( 700, "../img/puntos_panoramas/multigrado.png");
infospot6.position.set( 4000, -800, 3400 );
infospot6.addHoverText( '6. Clasificación Multígrados y monógrados', 60);
infospot6.visible = false;

infospot7 = new PANOLENS.Infospot( 700, "../img/puntos_panoramas/final.png");
infospot7.position.set( 4000, -1900, 4200 );
infospot7.addHoverText( '7. Mitos', 60);
infospot7.visible = false;

infospot8 = new PANOLENS.Infospot( 800, "../img/puntos_panoramas/incentivos.png");
infospot8.position.set( 3200, -2100, 4900 );
infospot8.addHoverText( '8. Final', 60);
infospot8.visible = false;




infospot.addEventListener( 'click', function(){	
	verpunto2();
	introduc();
} );

infospot2.addEventListener( 'click', function(){
	verpunto3();
	isla();	
} );

infospot3.addEventListener( 'click', function(){	
	verpunto4();
	viscosidad();
} );

infospot4.addEventListener( 'click', function(){	
	verpunto5();
	infografia2();
} );

infospot5.addEventListener( 'click', function(){
verpunto6();
clasificacionapi1a();	
	// infografia3();
	// infogrf(3,0);
} );

infospot6.addEventListener( 'click', function(){	
	verpunto7();
	clasificacion6a();
} );

infospot7.addEventListener( 'click', function(){	
	verpunto8();
	mitos();
} );

infospot8.addEventListener( 'click', function(){	
	final();
} );

panorama.add( infospot, infospot2, infospot3, infospot4, infospot5, infospot6, infospot7, infospot8);



viewer = new PANOLENS.Viewer( { container: container } );
viewer.add( panorama );

viewer.addUpdateCallback(function(){
  
});

/*---------CONTENIDOS DINÄMICOS------------*/

bulletActual = 0;
carpetaInfo = 12;

/*---------CONTENIDOS INFO 1-------*/
var menuInfo1 = 6;
var imgInfo1 = ["../img/punto12/lubricantes1.png","../img/punto12/lubricantes2.png","../img/punto12/lubricantes3.png","../img/punto12/lubricantes4.png","../img/punto12/lubricantes5.png","../img/punto12/lubricantes6.png"];
var info1_txt1 = "<div class='bulletTxt'><h3>Funciones de los lubricantes</h3><p>Un lubricante es una sustancia que forma una película entre dos piezas móviles para ayudarlas a disminuir y controlar su fricción evitando el contacto metal contra metal, pero también ofrece otras ventajas.</p></div>";
var info1_txt2 = "<div class='bulletTxt'><h3>Funciones de los lubricantes</h3><p>● Facilita el arranque del motor vehículo a bajas temperaturas (arranque en frío)</p></div>";
var info1_txt3 = "<div class='bulletTxt'><h3>Funciones de los lubricantes</h3><p>● Facilita el arranque del motor vehículo a bajas temperaturas (arranque en frío)<br><strong>● Protege las piezas contra la corrosión (anti herrumbre).</strong></p></div>";
var info1_txt4 = "<div class='bulletTxt'><h3>Funciones de los lubricantes</h3><p>● Facilita el arranque del motor vehículo a bajas temperaturas (arranque en frío)<br>● Protege las piezas contra la corrosión (anti herrumbre).<br><strong>● Mantiene el motor limpio.</strong></p></div>";
var info1_txt5 = "<div class='bulletTxt'><h3>Funciones de los lubricantes</h3><p>● Facilita el arranque del motor vehículo a bajas temperaturas (arranque en frío)<br>● Protege las piezas contra la corrosión (anti herrumbre).<br>● Mantiene el motor limpio.<br><strong>● Controla la temperatura del motor (refrigera)</strong></p></div>";
var info1_txt6 = "<div class='bulletTxt'><h3>Funciones de los lubricantes</h3><p>Los diferentes ejemplos de aplicaciones de los lubricantes en cuanto a su tipo,</p></div><div class='siguienteFloat hvr-pulse' onclick='cerrarinfografia1();'></div>";

/*---------CONTENIDOS INFO 3-------*/
var menuInfo3 = 5;
var imgInfo3 = ["../img/punto12/info3/api1.png","../img/punto12/info3/api2.png","../img/punto12/info3/api3.png","../img/punto12/info3/api4.png","../img/punto12/info3/api5.png"];
var info3_txt1 = "<div class='bulletTxt'><h3>Clasificación de los aceites según API</h3><p>Existe entidades que regulan y estandarizan los asuntos relacionados con los lubricantes: <br><br>Las entidades que certifican el nivel de calidad son:<br> * Clasificación API (Instituto Americano del Petróleo de EUA) <br>* Clasificación JASO (Organización Japonesa Automotriz de Estándares)<br><br>Las entidades que certifican la viscosidad son:<br>* Clasificación SAE (Sociedad de Ingenieros Automotrices de EUA) <br>* Clasificación ISO (Organización de Estandarización Internacional)<br><br>A continuación nos centraremos en la clasificación según el API y más adelante, veremos la clasificación SAE.<br><br> API tiene estandarizados los diferentes niveles de calidad de los aceites para lubricar motores de combustión interna, tanto diésel como gasolina. Es quien desarrolla el lenguaje del consumidor de aceites automotrices.</p></div>";
var info3_txt2 = "<div class='bulletTxt'><h3>Clasificación de los aceites según API</h3><p>Para motores diésel, la clasificación API comenzará con la letra C (inicial de Compresión por la manera particular de estos motores de generar la explosión interna por compresión)</p></div>";
var info3_txt3 = "<div class='bulletTxt'><h3>Clasificación de los aceites según API</h3><p>Para motores diésel, la clasificación API comenzará con la letra C (inicial de Compresión por la manera particular de estos motores de generar la explosión interna por compresión)</p></div>";
var info3_txt4 = "<div class='bulletTxt'><h3>Clasificación de los aceites según API</h3><p>A continuación, sigue una letra que nos indica la calidad del aceite: <br><br>Entre mayor sea la segunda letra, mayor será l calidad. Por ejemplo: API CI4 es el más utilizado en aceites diésel, pero API CK4, es de máyor calidad. En motores a gasolina, el API SN provee la máxima protección.</p></div>";
var info3_txt5 = "<div class='bulletTxt'><h3>Clasificación de los aceites según API</h3><p>¿Cuál escoger? Depende del modelo del vehículo y la exigencia del fabricante. No todos los lubricantes son buenos para todos los carros.<br><br>NO INTENTEN UTILIZAR UN ACEITE LUBRICANTE QUE NO CORRESPONDA CON LA TECNOLOGÍA DE SU VEHICULO.</p></div><div class='siguienteFloat hvr-pulse' onclick='cerrarinfografia3();'></div>";
//-------INFO POR DIAPO-------------

/*----------CONTENIDOS INFO 4-----------*/ 
var menuInfo4 = 4;
var imgInfo4 = ["../img/punto12/info4/sae1.png","../img/punto12/info4/sae2.png","../img/punto12/info4/sae3.png","../img/punto12/info4/sae4.png","../img/punto12/info4/sae5.png"];
var info4_txt1 = "<div class='bulletTxt'><h3>Clasificación de los aceites según SAE.</h3><p>SAE: Sociedad de Ingenieros automotrices. Es la sociedad que establece el rango de viscosidad apropiado de un lubricante. Hay que tener en cuenta que cada grado SAE no es una medida exacta de la viscosidad sino un rango.<br><br>Los aceites monógrados siempre tendrán un solo número, los aceites multígrados tendrán siempre dos números separados por la letra W.</p></div>";
var info4_txt2 = "<div class='bulletTxt'><h3>Monógrado</h3><p>Los aceites monógrados siempre tendrán un solo número y ofrecerán un buen desempeño solo en una temperatura de operación.<br><br>Por ejemplo: UNO ULTRA 50, API SF<br><br>Es usual que los carros con tecnologías antiguas utilicen este tipo de aceites porque cubren apropiadamente las necesidades de lubriación que tienen estos vehículos.</p></div>";
var info4_txt3 = "<div class='bulletTxt'><h3>Multígrado</h3><p>Por el contrario, los vehículos con tecnologías más modernas, presentan necesidades de lubriacación más exigentes, por ello necesitan un tipo de aceite que ofrezca comportamientos distintos en las dos temperaturas que maneja el motor, es decir que tengan dos grados de viscosidad.<br><br>Los aceites multigrados son aquellos que básicamente cumplen estas exigencias presentando una mejor fluidez en la temperatura de arranque y un buen cubrimiento a muy altas temperaturas, por ejemplo, en los anillos.</p></div>";
var info4_txt4 = "<div class='bulletTxt'><h3>Clasificación de los aceites según SAE.</h3><p>El primer número (antes de la W) representa la menor viscosidad del aceite, se refiere a la viscosidad a la temperatura de arranque del motor (temperatura ambiente) así como a la fluidez a muy bajas temperaturas. Entre más pequeño sea el número más fácilmente fluirá el aceite por el sistema del carro al momento de encenderlo, es decir cuando está frío. <br><br>El segundo número representa la viscosidad del aceite a la temperatura de operación del motor, es decir cuando alcanza una alta temperatura. Mientras más alto sea el número, más viscoso será. <br><br>RECUERDE QUE SE DEBE UTILIZAR EL ACEITE LUBRICANTE QUE SU FABRICANTE INDIQUE EN EL MANUAL DEL VEHÍCULO.</p></div><div class='siguienteFloat hvr-pulse' onclick='cerrarinfografia4();'></div>";
//-------INFO POR DIAPO-------------


function verpunto2() {
   infospot2.visible = true;
 }
 function verpunto3() {
   infospot3.visible = true;
 }
 function verpunto4() {
   infospot4.visible = true;
 }
 function verpunto5() {
   infospot5.visible = true;
 }
 function verpunto6() {
   infospot6.visible = true;
 }
 function verpunto7() {
   infospot7.visible = true;
 }
 function verpunto8() {
   infospot8.visible = true;
 }