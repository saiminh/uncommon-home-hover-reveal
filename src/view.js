
function revealHandler(element, index) {
  if ( element.classList.contains('revealed') ) {
    return;
  } 
  else {
    document.querySelectorAll('.revealed').forEach((revealedElement) => {
      revealedElement.classList.remove('revealed');
    })
    const link = element.getAttribute('href');
    const linkedElements = document.querySelectorAll(`[href="${link}"]`);
    linkedElements.forEach((linkedElement) => {
      linkedElement.classList.add('revealed');
    })
    const imageContainer = document.querySelector('.uncommon-home-hover-reveal__images'),
          windowWidth = window.innerWidth,
          amountOfImages = document.querySelectorAll('.uncommon-home-hover-reveal__images img').length;
          imageContainerWidth = imageContainer.querySelector('img').offsetWidth,
          ueberbleib = windowWidth - imageContainerWidth,
          ueberbleibProImage = ueberbleib / amountOfImages,
          rotation = -5 + ( 25 * index ) * 0.1 + 'deg';
    imageContainer.style.transform = `translateX(${(index * ueberbleibProImage)}px) rotate(${rotation})`;
  }
}


window.addEventListener('load', () => {
  const container = document.querySelector('.uncommon-home-hover-reveal');
  let containerPosY = container.getBoundingClientRect().top + window.scrollY;
  
  const links = document.querySelectorAll('.uncommon-home-hover-reveal a');
  
  links.forEach((link, index) => {
    if ( index === 0 ) {
      revealHandler(link, 0);
    }
    link.addEventListener( 'mouseenter', (e) => revealHandler(e.target, index) );
  })

  let firstScrollChangeY = containerPosY - (window.innerHeight / 4) / 2 ;
  let secondScrollChangeY = containerPosY;
  let thirdScrollChangeY = containerPosY + (window.innerHeight / 4) / 2;
  let fourthScrollChangeY = containerPosY + (window.innerHeight / 4) ;

  window.addEventListener('scroll', () => {
    containerPosY = container.getBoundingClientRect().top + window.scrollY;

    if ( window.scrollY < firstScrollChangeY ) {
      revealHandler(links[0], 0);
    }
    if ( window.scrollY > firstScrollChangeY ) {
      revealHandler(links[1], 1);
    }
    if ( window.scrollY > secondScrollChangeY ) {
      revealHandler(links[2], 2);
    }
    if ( window.scrollY > thirdScrollChangeY ) {
      revealHandler(links[3], 3);
    }
    if ( window.scrollY > fourthScrollChangeY ) {
      revealHandler(links[4], 4);
    }
  })

})
