var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var ALL_DIU_SELECTOR = '[data-image-url]';

function changeRandomUrl() {
  setTimeout(function(){
    var random = Math.floor(Math.random() * 5);
    var RANDOM_URL_SELECTOR = '[data-image-url="img/otter' + (random+1) + '.jpg"]';
    var detailImage = document.querySelector(RANDOM_URL_SELECTOR);
    detailImage.setAttribute('data-image-url', 'http://www.tshirtlaundry.com/assets/images/photos/Tacocat3-5-2013-2.jpg');
  }, 1000);
}

function resetAllRandomOne() {
  var thumbnails = document.querySelectorAll(ALL_DIU_SELECTOR);
  for (i = 0; i < 5; i++) {
    thumbnails[i].setAttribute('data-image-url', 'img/otter'+ (i+1) + '.jpg');
  }
  changeRandomUrl();
}

function setDetails(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function (event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    if (thumb.getAttribute('data-image-url') == 'http://www.tshirtlaundry.com/assets/images/photos/Tacocat3-5-2013-2.jpg')
      resetAllRandomOne();
});
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  resetAllRandomOne();
}

initializeEvents();
