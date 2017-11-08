(function(){
  var IMAGES     = [5, 3, 4, 6, 7, 8, 10];
  // var resetTimer = null;
  var safeToGo   = true;

  var reset = function(){
    var kk = document.getElementById('kk');
    return setImage(IMAGES[0]);
  };

  var setImage = function(nextNumber){
    var kk = document.getElementById('kk');
    return kk.setAttribute('src', './img/'+nextNumber+'.png');
  };

  var goToNextImage = function(){
    var kk         = document.getElementById('kk');
    var src        = kk.getAttribute('src');
    var kkNumber   = parseInt(src.replace('./img/','').replace('.png',''), 10);
    var nextNumber = IMAGES[0];

    for (imageNumber of IMAGES) {
      if (imageNumber > kkNumber) {
        nextNumber = imageNumber;
        break
      }
    }
    // if (resetTimer) {
    //   clearTimeout(resetTimer);
    // }
    // resetTimer = setTimeout(reset, 2000);
    return setImage(nextNumber);
  };

  var cacheImages = function(){
    for (imageNumber of IMAGES) {
      img = new Image
      img.src = './img/'+imageNumber+'.png'
    }
  };

  document.addEventListener('mousemove', function(event){

    if (event.target.tagName == 'IMG') return;

    if (safeToGo) {
      safeToGo = false;
      setTimeout(function(){
        goToNextImage()
        safeToGo = true;
      }, 200);
    }

  });

  cacheImages();

})();
