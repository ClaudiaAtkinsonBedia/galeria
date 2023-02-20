getImages();

function getImages() 
{
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.unsplash.com/photos/random?client_id=SW0vhpAaysZZpBP6MrDXLxn2wQm8LlQnRg18c0bHkOQ&count=3", true);
  xhr.onload = function() 
  {
    if (xhr.readyState === 4 && xhr.status === 200)
    {
      var images = JSON.parse(xhr.responseText);
      // Lógica para mostrar las imágenes en el carrusel
      var image1 = document.getElementById('image1');
      var image2 = document.getElementById('image2');
      var image3 = document.getElementById('image3');

      image1.setAttribute('src', images[0].urls.regular);
      image2.setAttribute('src', images[1].urls.regular);
      image3.setAttribute('src', images[2].urls.regular);
    } 
    else 
    {
      console.log("Ha habido un error al cargar las imágenes. ¡Lo sentimos!"); // ¿Preferís un alert?
    }
  };
  xhr.send();
}
