let indiceFoto = 2;
let maximoDeFotos = 4;
let intervaloMs = 10000;

function novaFoto(){
    
    if(indiceFoto > maximoDeFotos){
        indiceFoto = 1;
    }
    let caminhoDaFoto = `fotos/${indiceFoto}.jpg`;
    let tagImagem = document.getElementById('foto-polaroid');
    
    tagImagem.style.filter = 'brightness(10) saturate(0) opacity(0.5) blur(5px)';
    tagImagem.setAttribute('src',caminhoDaFoto);
    tagImagem.style.filter = 'none';
    
    indiceFoto += 1;
}

//setInterval(novaFoto,intervaloMs);