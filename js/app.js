window.addEventListener("load", function() {
    var boton = document.getElementById("mostrar");
    boton.addEventListener("click", function() {
        var numero = parseFloat(document.getElementById("numero").value);
        var caracter = document.getElementById("caracter").value;
        arregloMatriz(numero,caracter);
        
    });

    function arregloMatriz(numero,caracter){
        var arregloContenedor = [];
        for (var i=0 ; i < numero; i++){ 
            var arreglo = [];
            for(var j=0 ; j< numero; j++){
                arreglo.push(caracter);
            }
            arregloContenedor.push(arreglo.join(" "));
        }
        document.getElementById("resultado").innerHTML= arregloContenedor.join("<br>");
    }
        
});