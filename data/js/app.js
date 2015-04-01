'use strict';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getSplash (results) {
  var images = results.images;
  console.log('pizza:' + images.length);
  
  if (images.length === 0) {
    return;
  }
  var index = getRandomInt(0, images.length);
  var imgUrl = images[index].url;
  var newTabBox = document.getElementById('newtab-scrollbox');
  newTabBox.style.backgroundRepeat = 'no-repeat';
  newTabBox.style.backgroundSize = 'cover';
  newTabBox.style.backgroundPosition = 'center center';
  newTabBox.style.backgroundImage = 'url(' + imgUrl + ')';

  imageToBase64(imgUrl).then(function(base64){
    console.log('pizza' + base64);
  });
}

getSplash(self.options.result);
