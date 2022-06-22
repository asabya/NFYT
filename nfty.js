// Hides the blacklisted channels and titles on mouse scroll
var blacklist = [];

(() => {
  chrome.storage.sync.get({
    blacklists: ''
  }, (items) => {
    blacklist = items.blacklists.split(',');
    console.log(blacklist)
    checkBlacklist();
  });
  window.onscroll = (event) => {
    checkBlacklist();
  }
})();

checkBlacklist = () => {
  let channel_list = document.querySelectorAll("#channel-name > #container > #text-container > #text > .yt-simple-endpoint");
  for (var item of channel_list) {
    console.log("channel_list item :", item.innerHTML, blacklist.indexOf(item.innerHTML))
    if(blacklist.indexOf(item.innerHTML) > -1){
      console.log("channel matched : ", item.innerHTML)
      item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
    }
  }
  let title_list = document.querySelectorAll("#video-title-link > #video-title");
  for (var item of title_list) {
    console.log("channel_list item :", item.innerHTML, blacklist.indexOf(item.innerHTML))
    if(blacklist.indexOf(item.innerHTML) > -1){
      console.log("title matched : ", item.innerHTML)
      item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
    }
  }
};
