
var angle = 0;
function galleryspin(sign) { 
  const spinner = $('#spinner');
  if (!sign) { 
    angle = angle + 45; 
  } else { 
    angle = angle - 45; 
  }
  spinner.css("transform", "rotateY(" + angle + "deg)");
}

/*$(document).ready(function () {
  const carousel = $('#carouselId');
  const inner = carousel.find('.carousel-inner');

  $.get("data.json", function (data) {
    for (let i = 0; i < data.items.length; i++) {
      const item = $('<div></div>').addClass('carousel-item');
      if (i === 0) {
        item.addClass('active');
      }
      const caption = $('<div></div>').addClass('carousel-caption');
      const image = $('<img>').addClass('img-fluid');
      image.attr('src', data.items[i].image);

      const titre = $('<div></div>').addClass('titre-top');
      titre.text(data.items[i].titre);
      caption.append(titre);

      const description = $('<p></p>').addClass('description');
      description.text(data.items[i].description);
      caption.append(description);

      item.append(image);
      item.append(caption);
      inner.append(item);
    }

    // Appel de la fonction galleryspin
    galleryspin(0);
  });/*


*/