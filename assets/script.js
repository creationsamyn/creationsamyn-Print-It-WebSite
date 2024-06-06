const slides = [
	{
	  "image": "assets/images/slideshow/slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "assets/images/slideshow/slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image": "assets/images/slideshow/slide3.jpg",
	  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image": "assets/images/slideshow/slide4.png",
	  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ]
  const banner = document.getElementById('banner');
  let currentIndex = 0;
  
  function showSlide(currentIndex) {
      // Limpiar el banner antes de agregar el nuevo slide
      banner.innerHTML = '';
  
      let slideContainer = document.createElement('div');
      slideContainer.className = 'banner';
  
      let myImg = document.createElement('img');
      
      myImg.src = slides[currentIndex].image;
      myImg.alt = slides[currentIndex].tagLine;
      myImg.className = 'banner-img'; // Asignar la clase banner-img
  
      let myText = document.createElement('p');
      myText.innerHTML = slides[currentIndex].tagLine;
  
      slideContainer.appendChild(myImg);
      slideContainer.appendChild(myText);
      banner.appendChild(slideContainer);
  
      // Crear puntos de navegación
      let dotsContainer = document.createElement('div');
      dotsContainer.className = 'dots';
      
      slides.forEach((slide, idx) => {
          let dot = document.createElement('div');
          dot.className = 'dot';
          dot.addEventListener('click', () => {
              showSlide(idx);
          });
          if (idx === currentIndex) {
              dot.classList.add('dot_selected');
          }
          dotsContainer.appendChild(dot);
      });
      banner.appendChild(dotsContainer);
  
      // arrow_Lef
      let arrowLeft = document.createElement('img');
      arrowLeft.src = 'assets/images/arrow_left.png';
      arrowLeft.className = 'arrow arrow_left';
      arrowLeft.addEventListener('click', () => {
          showPrevSlide();
      });
      banner.appendChild(arrowLeft);
       // arrow_Right
      let arrowRight = document.createElement('img');
      arrowRight.src = 'assets/images/arrow_right.png';
      arrowRight.className = 'arrow arrow_right';
      arrowRight.addEventListener('click', () => {
          showNextSlide();
      });
      banner.appendChild(arrowRight);
  }

  // Función para mostrar el slide antes
  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    
    showSlide(currentIndex);
}

  // Función para mostrar el próximo slide
  function showNextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      
      showSlide(currentIndex);
  }
  
  // Mostrar el primer slide al cargar la página
  showSlide(currentIndex);
  
  // Cambiar automáticamente al siguiente slide cada 5 segundos (5000 milisegundos)
  setInterval(showNextSlide, 5000);