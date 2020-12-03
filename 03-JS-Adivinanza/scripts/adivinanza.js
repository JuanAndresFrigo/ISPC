const adivinanza = [`Aunque tengo cuatro patas, yo nunca puedo correr, tengo la comida encima, y no la puedo comer.`, `Con madera de cerezo, pino o de nogal construyo los muebles cn espero para tu hogar.`];
const respuesta = ["Mesa", "Carpintero"];

window.onload = function () {
    cambiarAdivinanza();
};

var vidas = 4;

function cambiarAdivinanza() {
    // Actualiza el parrafo con la adivinanza, y resetea las vidas en 4
    resetAdivinanza();

    let indexAdivinanza = getAdivinanza();

    if (indexAdivinanza == 0) {
        document.getElementById("adivinanzaTxt").innerHTML = adivinanza[0];
    }
    else {
        document.getElementById("adivinanzaTxt").innerHTML = adivinanza[1];
    }
}

function checkRespuesta() {
    let resp = document.getElementById("respInput").value;
    let indexAdivinanza = getAdivinanza();

    if (resp.toLowerCase() == respuesta[indexAdivinanza].toLowerCase()) {
        let playAgain = confirm(`Felicidades!! Respuesta correcta.
    ¿Quieres jugar nuevamente?`);
        if (playAgain) {
            resetAdivinanza();
        }
    } else {
        vidas--;
        if (vidas > 0) {
            alert("Respuesta incorrecta, intenta nuevamente.");
            setLifeProgress(vidas);
        } else {
            setLifeProgress(vidas);
        }
    }

    return false;
}

function getAdivinanza() {
    // Para saber que combo esta marcado, y asi saber la adivinanza y su respuesta.
    if (document.getElementById("radioBtnAdv1").checked) {
        return 0;
    }
    else {
        return 1;
    }
}

function resetAdivinanza() {
    // regreso las vidas a 4, limpio input, deshabilito pistas.
    vidas = 4;
    setLifeProgress(vidas);

    document.getElementById("respInput").value = "";

    var btn1 = document.getElementById("btnPista1");
    var btn2 = document.getElementById("btnPista2");
    btn1.disabled = true; btn1.innerHTML="Pista 1";
    btn2.disabled = true; btn2.innerHTML="Pista 2";
}

function setLifeProgress(vida) {
    // Cambia el varios del progress de vida
    let progress1 = document.getElementById("progress1");
    let progress2 = document.getElementById("progress2");
    let progress3 = document.getElementById("progress3");
    let progress4 = document.getElementById("progress4");

    switch (vida) {
        case 4:
            progress1.style.width = '25%';
            progress2.style.width = '25%';
            progress3.style.width = '25%';
            progress4.style.width = '25%';
            break;
        case 3:
            progress4.style.width = '0%';

            break;
        case 2:
            progress3.style.width = '0%';

            document.getElementById("btnPista1").disabled = false;
            document.getElementById("btnPista2").disabled = false;

            break;
        case 1:
            progress2.style.width = '0%';
            break;
        case 0:
            alert(`Perdiste :( 
            Te has quedado sin vidas, vuelve a empezar`);
            resetAdivinanza();
            break;
    }
}

function showPista(indexPista) {
    // Muestra la pista correspondiente
    let indexAdivinanza = getAdivinanza();

    if (indexAdivinanza == 0) {
        switch (indexPista) {
            case 1:
                var btn = document.getElementById("btnPista1");
                btn.disabled = true;
                btn.innerHTML ="Soy un mueble";
                break;
            case 2:
                var btn = document.getElementById("btnPista2");
                btn.disabled = true;
                btn.innerHTML ="Estoy en la cocina";
                break;
        }
    } else {
        switch (indexPista) {
            case 1:
                var btn = document.getElementById("btnPista1");
                btn.disabled = true;
                btn.innerHTML ="Soy un oficio";
                break;
            case 2:
                var btn = document.getElementById("btnPista2");
                btn.disabled = true;
                btn.innerHTML ="Trabajo con madera";
                break;
        }
    }
}


