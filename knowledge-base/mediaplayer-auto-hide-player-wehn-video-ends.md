---
title: Auto Hide Video Player After Video Ends
description: Learn how to automatically play a video on page load and hide the RadMediaPlayer control once the video ends in ASP.NET AJAX applications.
type: how-to
page_title: Auto Hide Video Player After Video Ends
slug: mediaplayer-auto-hide-player-wehn-video-ends
tags: radmediaplayer, asp.net ajax, video, autoplay, hide, client-side events
res_type: kb
ticketid: 1666814
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadMediaPlayer for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I want to auto-play an MP4 video with sound on page load and make the video player disappear after the video has finished playing. The goal is to play a short welcome video by the owner that automatically hides itself upon completion.

This KB article also answers the following questions:

- How can I make RadMediaPlayer auto-play a video?
- Is it possible to hide RadMediaPlayer after the video ends?
- Can RadMediaPlayer start playing a video automatically and then hide itself?

## Solution

To achieve the desired behavior of auto-playing a video and hiding the [RadMediaPlayer](https://docs.telerik.com/devtools/aspnet-ajax/controls/mediaplayer/overview) after it ends, use the `OnClientEnded` [client-side event](https://docs.telerik.com/devtools/aspnet-ajax/controls/mediaplayer/client-side-programming/overview#client-side-events). In the event handler, you can set the visibility of the RadMediaPlayer to `false`.

1. Add the RadMediaPlayer control to your ASP.NET AJAX page. 

````ASP.NET
<telerik:RadMediaPlayer RenderMode="Lightweight" ID="RadMediaPlayer1" runat="server" Width="640px" Height="360px"
    Source="https://www.example.com/path/to/your/video.mp4" OnClientEnded="onClientEnded" />
````

2. Define the `onClientEnded` JavaScript function. This function will be triggered when the video playback ends, hiding the RadMediaPlayer control.

````JavaScript
function onClientEnded(sender, args) {
    sender.set_visible(false);
}
````

By following these steps, the RadMediaPlayer will automatically begin playing the video when the page loads and will hide itself after the video concludes, achieving the effect of a welcoming video that disappears post-playback.

## See Also

- [RadMediaPlayer Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/mediaplayer/overview)
- [MediaPlayer Client-Side Programming](https://docs.telerik.com/devtools/aspnet-ajax/controls/mediaplayer/client-side-programming/overview)
- [MediaPlayer Client-Side Events](https://docs.telerik.com/devtools/aspnet-ajax/controls/mediaplayer/client-side-programming/overview#client-side-events)
