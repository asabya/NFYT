function openOptions() {
    console.log('open options called')
    // chrome.tabs.create({ 'url': 'chrome://extensions/?options=' + chrome.runtime.id });
    chrome.tabs.create({ url: "options.html" });

  }

document.getElementById('open_options').addEventListener('click',openOptions());