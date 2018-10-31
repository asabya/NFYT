# NFYT : https://medium.com/@asabya/noise-free-youtube-7e11c57063ba

Chrome Plugin to remove `YouTube Mixes` and `Recommended` videos.

To install 

- Clone This repository
- Visit `chrome://extensions/`
- Enable `Developer mode` at the top right corner
- Click `Load unpacked` at the top left corner
- Select the cloned `NFYT` folder

To add Channels to blacklist add the channel names in the `blacklist` array in `inject.js`
```
var blacklist = ['YouTube Mixes', 'Recommended'];
```

