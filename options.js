// Saves options to chrome.storage
save_options = () => {
  let blacklists = document.getElementById('blacklist-input').value;
  let blacklistArray = blacklists.split(',');
  blacklistArray =blacklistArray.map(item => item.trim());
  blacklists = blacklistArray.join(',');
  chrome.storage.sync.set({
    blacklists: blacklists
  }, () => {
    // Update status to let user know options were saved.
    let status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(() => {
      status.textContent = '';
    }, 750);
  });
};

/**
 * Restores saved channel list
 * stored in chrome.storage.
 */
restore_options = () => {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    blacklists: ''
  }, (items) => {
    document.getElementById('blacklist-input').value = items.blacklists;
  });
};

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);