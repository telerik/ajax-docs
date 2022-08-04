---
title: Show a thumbnail when the mouse is over the tracking slider
description: 
type: troubleshooting
page_title: Show a thumbnail when the mouse is over the tracking slider
slug: mediaplayer-show-thumbnail-mouse-over-slider
position: 
tags: 
ticketid: 1574596
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadMediaPlayer for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
The KB article shows how to enable a thumbnail of the video, while the video is playing, and the cursor is hovering over the mediaplayer track slider.  This effect is most evident in the YouTube videos.

## Solution
The code solution below appends an `<img>` element to the generated thumbnail on hovering over the time progress icon:


````ASPX
    <style>
        div.RadMediaPlayer .RadSlider div.rmpToolTip {
            margin: -63px -49px;
            padding: 1px;
        }

            div.RadMediaPlayer .RadSlider div.rmpToolTip video {
                margin-bottom: -5px;
                width: 150px;
                height: 85px;
            }
    </style>
        <script type="text/javascript">
Telerik.Web.UI.MediaPlayerObjects.MediaPlayerToolbar.prototype.setTimeValueOnTooltip = function (value) {
                var time = 1;
                var parts = value.split(":");
                for (var i = parts.length - 1; i >= 0; i--) {
                    time += parseInt(parts[i]) * Math.pow(60, parts.length - (i + 1));
                }

                var thumbnailsVideo = $get(this.owner.get_id() + "_thumbnailsVideo");

                if (!thumbnailsVideo) {
                    thumbnailsVideo = document.createElement('video');
                    thumbnailsVideo.id = this.owner.get_id() + "_thumbnailsVideo";
                    thumbnailsVideo.src = this.owner.get_source();
                    this._jprogressTooltip.prepend(thumbnailsVideo);
                }
                thumbnailsVideo.currentTime = time;
            }
        </script>
        <div class="testo" data-width="24"></div>
        <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
        </telerik:RadAjaxManager>
        <telerik:RadMediaPlayer ID="RadMediaPlayer1" runat="server" Width="640px" Height="360px"
            Source="Video/Video1.mp4" Skin="Silk" StartVolume="0">
        </telerik:RadMediaPlayer>
````

You can download the solution files from [here](files/mediaplayer-thumbnails.zip).
 
For more information you can check the following online resources:
* https://codepen.io/renanpupin/pen/PqjyeK
* https://stackoverflow.com/questions/22607572/video-html5-is-it-possible-to-display-thumbnail-from-video-on-a-specific-time
* http://usefulangle.com/post/46/javascript-get-video-thumbnail-image-jpeg-png
* https://gist.github.com/adamjimenez/5917897
* https://www.sitepoint.com/html5-video-fragments-captions-dynamic-thumbnails/
 

