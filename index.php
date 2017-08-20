<?php
    $url = rawurlencode("$protocol$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");
    $signPackage = json_decode(file_get_contents("http://px.appmagics.cn/WxAPI/lib/getSignPackage.php?path=$url"),true);
?>




<html>
    <head>
        <title>TYpalyer</title>
        <meta charset="utf-8" />
        <meta name="viewport" id="viewport"  content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <style>
            body {
                font-family: Monospace;
                background-color: #454545;
                margin: 0px;
                overflow: hidden;
            }
        </style>

    </head>
    <body>

    <div id="video_wrap"></div>


    <script src="./build/TYplayer_v1.min.js"></script>


    <!-- <script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script> -->
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script>
        TY.Debug = 1;

        //log
        logBox = document.createElement('div');
        logBox.style='position:absolute;z-index: 9999;text-align:left;color:#fff;font-size:10px;-webkit-text-shadow:0 1px 0 #000;-moz-text-shadow:0 1px 0 #000;-ms-text-shadow:0 1px 0 #000;-o-text-shadow:0 1px 0 #000;text-shadow:0 1px 0 #000;';
        logBox.style.position = 'absolute';
        logBox.style.top = '10px';
        logBox.style.width = '100%';

        document.body.appendChild(logBox);
        TY.logBox=logBox;
        TY.logBox.innerHTML = '018';


        if(TY.isAndroid)TY.dpr=1;
        $("#viewport")[0].content="width=device-width, minimum-scale="+1/TY.dpr+", maximum-scale="+1/TY.dpr;


        var videoUrl0 = 'http://pili-live-hls.appmagics.cn/appmagics-avatar-live/796911761490325842048.m3u8';
        var videoUrl1 = 'http://pullhls6.a8.com/live/1489723744380350/playlist.m3u8';
        var videoUrl = 'http://pili-live-hls.appmagics.cn/appmagics-avatar-live/796135781493177438007.m3u8';
        var videoUrl4 = './v3.mp4';
        var videoUrl3 = './v4.mp4';

        var videoBg='./p.jpg';
        var isLive=1;

        //控制条距底的距离
        var skinBottom=0;

        ///片源 默认为0:竖版  1:竖版  2:横版 
        var orientationStyle=0;

        
        var player = new TY.TYplayer(videoUrl,"#video_wrap",videoBg,isLive,skinBottom,orientationStyle);
        console.log(player);

        console.log(player.VideoHeight);
        console.log(player.VideoWidth);


        player.addEventListener("VidoeError",function(e)
        {
            TY.Log(e);
            //{code: 4, error: "播放过程中URL无效"}
        })

        player.addEventListener("VidoeEnd",function(e)
        {
            TY.Log(e);
            // alert(e);
            // player.removeThis();
        }) 
        player.addEventListener("VidoeClick",function(e)
        {
            TY.Log("VidoeClick");
            // alert("VidoeClick");
        }) 





        wx.config({
          debug: false,
          appId: '<?php echo $signPackage["appId"];?>',
          timestamp: <?php echo $signPackage["timestamp"];?>,
          nonceStr: '<?php echo $signPackage["nonceStr"];?>',
          signature: '<?php echo $signPackage["signature"];?>',
          jsApiList: [
              'checkJsApi',
              'onMenuShareTimeline',
              'onMenuShareAppMessage',
              'onMenuShareQQ',
              'onMenuShareWeibo'
          ]
        });
        wx.ready(function(){
            setTimeout(function()
            {
                player.toPlay();
            },600)
        });




    </script>    


    </body>
</html>


