
//Variables globales
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var indicadorDeColor = document.getElementById('indicador-de-color');
var baldeDePintura = document.getElementById('balde-de-pintura');


var flag = false;

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//Eventos
grillaPixeles.addEventListener('mousedown', mousePresionado);
grillaPixeles.addEventListener('mouseup', mouseSuelto);
grillaPixeles.addEventListener('mouseover', pintarCorrido);


/*
===================
FUNCIONES
===================
*/

/*recorre la lista de colores nombreColores, y por cada color crea un elemento div y le asigna un background-color: color y la clase color-paleta. 
El elemento que crea la función deberá ser agregado como hijo del elemento paleta.*/
function paletaColores() {
  for(var contador=0; contador < nombreColores.length; contador++) {
        var color = document.createElement('div');
        color.className="color-paleta";
        color.style.backgroundColor = nombreColores[contador];
        paleta.appendChild(color);
        color.addEventListener("click", seleccionarColor);     
      }
}

/*crea cada pixel como un <div> y lo agrega a la grilla-pixeles. 
Para que funcione con los recursos descargables, el tamaño de la grilla deberá ser de 1750 pixeles.*/
function grilla() {
  for (var contadorPixeles=0; contadorPixeles < 1750; contadorPixeles++) {            
    var pixelColor = document.createElement('div');            
    pixelColor.class="pixel";   
    grillaPixeles.appendChild(pixelColor); 
    pixelColor.addEventListener("click", pintarPixel);
  }
}

/*Permite al usuario seleccionar un color de la paleta. 
Para eso, necesitamos lograr que, al hacer clic en algún color, el indicador-de-color cambie y refleje la selección*/
function seleccionarColor(e) {
  indicadorDeColor.style.backgroundColor = e.target.style.backgroundColor;
  baldeDePintura.style.backgroundColor = e.target.style.backgroundColor;
}

//El usuario puede pintar un pixel al hacer clic en un cuadrado de la grilla.
function pintarPixel(e) {
  e.target.style.backgroundColor=  indicadorDeColor.style.backgroundColor;
}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorDeColor.style.backgroundColor = colorActual;
    baldeDePintura.style.backgroundColor = colorActual;
    
  })
);

//Detecta si está presionada la tecla del mouse
function mousePresionado(e) {
  flag = true;  
}

//detecta si está suelta la tecla del mouse
function mouseSuelto(e) {
  flag = false;
}

//pinta de corrido si la tecla del mouse está presionada
function pintarCorrido(e) {
  if(flag === true) {
    pintarPixel(e);
  }
}



/*
====================
ANIMACIONES
====================
*/

//Borra lo que está pintado en la grilla  de pixeles
  $("#borrar").click (
    function (){
      var $borrarPixel = $("#grilla-pixeles div");
      $borrarPixel.animate({"background-color": "#ffffff"},1000);
    }
  );

  $('#balde-de-pintura').click(
    function() {
     var $colorDeFondo = $('#balde-de-pintura').css('background-color');
     console.log($colorDeFondo);
      $("#grilla-pixeles div").css('background-color', $colorDeFondo );    
    }

  );
  

  //carga las imágenes de superhéroes en la grilla
  $("#batman").click(
    function() {
      cargarSuperheroe(batman);
      }
    );

   $("#wonder").click(
    function() {
      cargarSuperheroe(wonder);
      }
    );

   $("#flash").click(
    function() {
      cargarSuperheroe(flash);
      }
    );

   $("#invisible").click(
    function() {
      cargarSuperheroe(invisible);
      }
    );
//Guarda el pixel art en la compu
  $("#guardar").click(
      function() {
        guardarPixelArt();
      }
    );

  $(document).ready(
      function() {
        paletaColores();
        grilla();
        $('ul.imgs li img').css({'cursor':'pointer'});
      }
    );