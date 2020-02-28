---
title: Subtitles
page_title: Subtitles | RadMediaPlayer for ASP.NET AJAX Documentation
description: Subtitles
slug: mediaplayer/functionality/subtitles
tags: subtitles
published: True
position: 2
---

# Subtitles



## 

**RadMediaPlayer** comes with a convenient feature of loading and showing any desired subtitles.

The users may toggle subtitles visibility using the Subtitles button with the CC(Close captioning) text.

**Enhancing the videos with subtitles may turn out very handy to your users.**
![Media Player Subtitles 1](images/mediaplayer-subtitles1.png)

## Providing the Subtitles

The player supports the following text file formats: **SBV, SRT, SSA, TTML, TTXT, VTT**. In addition to these extensions, you can also provide files in JSON or XML data formats.

````ASP.NET
<telerik:RadMediaPlayer RenderMode="Lightweight" runat="server" ID="RadMediaPlayer1"
    Height="360px" Width="640px"
    Source="https://www.youtube.com/watch?v=P0ZZ9T_c7lU"
    Subtitles="subtitleFile.srt">
</telerik:RadMediaPlayer>
````



When implementing a Playlist configuration, the corresponding property of the individual video tags is named **SubtitlesPath**.

````ASP.NET
<Playlist>
    <telerik:MediaPlayerVideoFile Path="video1.mp4" SubtitlesPath="subtitleFile.srt">
    </telerik:MediaPlayerVideoFile>
</Playlist>
````



## Controlling the Appearance

For altering and customizing the position and appearance of the Subtitles, you can make avail of the **rmpSubtitles** and **rmpSubtitlesInner** classes.

````ASP.NET
<style type="text/css">
    div.RadMediaPlayer .rmpSubtitles {
        padding-bottom: 30px;
    }
    div.RadMediaPlayer .rmpSubtitlesInner {
        font-size: 2em;
    }
</style>
````



# See Also

 * [Overview]({%slug mediaplayer/overview%})

 * [Live Demo](https://demos.telerik.com/aspnet-ajax/media-player/examples/functionality/subtitles/defaultcs.aspx)

 * [Getting Started]({%slug mediaplayer/getting-started%})
