let clickCount = 0;
function cambiarTexto() {
    clickCount++;
    const p = document.querySelector('#output');
    const seccion3 = document.querySelector('#section3');
    

    if(clickCount === 1){
        p.innerHTML = "una vez";
    }
    if(clickCount === 2){
        p.innerHTML = "ooootraaa???";
    }
    if(clickCount === 3){
        p.innerHTML = "tres veces ya???";
        seccion3.style.backgroundColor = "black";
       
    }
    if(clickCount === 4){
        p.innerHTML = "Pulsa el botón";
        seccion3.style.backgroundColor = "mediumspringgreen";
        clickCount = 0; 
    }
 }
  
