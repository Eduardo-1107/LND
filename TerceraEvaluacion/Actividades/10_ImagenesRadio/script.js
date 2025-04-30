let imagenes = ['media/Gato.jpg','media/Informática.jpg','media/SSD.jpg','media/tarjeta.jpg','media/twitter.jpg'];
const img = document.createElement('img');
document.querySelector('.imagenes').append(img);

for (let i = 0; i < imagenes.length; i++) {
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'imagenes'; 
    img.src = imagenes[i];
    document.querySelector('.inputs').append(input);
}
