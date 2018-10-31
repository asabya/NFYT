// this is the code which will be injected into a given page...
var blacklist = ['YouTube Mixes', 'Recommended'];
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
