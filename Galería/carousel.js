window.onload = inicio;

function inicio() {
  cargarImagenes();

  function cargarImagenes() {
    var imageUrls = [];
    for (let i = 0; i < 3; i++) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 2) {
          xhr.responseType = "blob";
        }
        if (xhr.readyState === 4 && xhr.status === 200) {
          var reader = new FileReader();
          reader.onload = function() {
            imageUrls.push(reader.result);
            if (imageUrls.length === 3) {
              mostrarImagenes(imageUrls);
            }
          };
          reader.readAsDataURL(xhr.response);
        }
      };
      xhr.open("GET", "https://source.unsplash.com/random?" + i, true);
      xhr.send();
    }
  }

  function mostrarImagenes(imageUrls) {
    var carouselInner = document.querySelector("#carousel-inner .carousel-inner");
    for (let i = 0; i < imageUrls.length; i++) {
      var carouselItem = document.createElement("div");
      carouselItem.classList.add("carousel-item");
      if (i === 0) {
        carouselItem.classList.add("active");
      }
      var img = document.createElement("img");
      img.src = imageUrls[i];
      img.classList.add("d-block", "w-100");
      carouselItem.appendChild(img);
      carouselInner.appendChild(carouselItem);
    }
  }
  // Add this line to add the "data-bs-ride" attribute to the carousel element
  document.querySelector("#carousel-inner").setAttribute("data-bs-ride", "carousel");
}
