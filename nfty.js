// this is the code which will be injected into youtube...

// Blacklisted channels, topics and titles
var blacklist = ['YouTube Mixes', 'Recommended'];

// Hides the blacklisted channels and titles on mouse scroll
(function() {
  checkBlacklist();
  window.onscroll = function (e) {
    checkBlacklist();
  }
})();

function checkBlacklist() {
  var list = document.querySelectorAll("#title.ytd-shelf-renderer");
  for (var item of list) {
    if(blacklist.indexOf(item.innerHTML) > -1){
      if(item.parentNode.parentNode.parentNode.parentNode.parentNode.tagName != 'ytd-shelf-renderer') {
        item.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
      } else {
        item.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
      }
    }
    item.classList.remove("ytd-shelf-renderer");
  }
}
