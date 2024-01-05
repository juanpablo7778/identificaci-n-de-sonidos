Webcam.attach('#camara');
camara=document.getElementById("camara");
Webcam.set(
    {
        width:350, 
        height:300,image_format:'png', png_quality:90
    }
);
function capturar_imagen() {
Webcam.snap(function(data_uri)
{
    document.getElementById("resultado").innerHTML='<img id="capturar_imagen" src="'+ data_uri+'"/>';

});    
}
console.log('ml5 version:', ml5.version );
clasificación= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pf0qgXVzd/model.json', modelocargado);
function modelocargado(){
   console.log('modelo cargado');
}
function identificar_imagen(){
    img=document.getElementById('capturar_imagen');

    clasificación.classify(img, ver_resultado);
    
}
function ver_resultado(error,results){

if (error){
console.error(error);

}
else{
 console.log(
    results
 );
document.getElementById("resultado_nombre_objeto").innerHTML=results[0].label;

document.getElementById("resultado_precision_objeto").innerHTML=results[0].confidence.toFixed(3);




}


}