// Saves options to chrome.storage
function save_options() {
  var blacklists = document.getElementById('blacklist-input').value;
  chrome.storage.sync.set({
    blacklists: blacklists
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    blacklists: ''
  }, function(items) {
      console.log(items.blacklists);
    document.getElementById('blacklist-input').value = items.blacklists;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);