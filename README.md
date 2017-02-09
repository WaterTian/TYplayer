TYplayer
======

[![QR](https://watertian.github.io/TYplayer/assets/TYplayerQR.gif)](http://watertian.github.io/TYplayer/)

## HTML5 Live Player v1 0.1.3
Mobile Html5 VideoPlayer framework
Compatible with IOS & Android Weixin Weibo

## Usage
```javascript
var videoUrl = 'http://alcdn.hls.xiaoka.tv/2016121/4c8/834/JQzoRZZaz2zJ5GbS/index.m3u8';
var videoBg='./p.jpg';
var isLive=0;
var player = new TY.TYplayer(videoUrl,"#video_wrap",videoBg,isLive);

player.addEventListener("VidoeError",function(e)
{
    TY.Log(e);
    //{code: 4, error: "播放过程中URL无效"}
})

player.addEventListener("VidoeEnd",function(e)
{
    TY.Log(e);
    // player.removeThis();
}) 
player.addEventListener("VidoeClick",function(e)
{
    TY.Log("VidoeClick");
}) 
```
[![layout](https://watertian.github.io/TYplayer/assets/TYplayerLayout.jpg)](http://watertian.github.io/TYplayer/)







