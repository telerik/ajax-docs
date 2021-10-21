---
title: YouTube Video Only Plays in Full Screen in RadMediaPlayer
description: YouTube Video Only Plays in Full Screen in RadMediaPlayer. Check it now!
type: how-to
page_title: YouTube Video Only Plays in Full Screen in RadMediaPlayer
slug: mediaplayer-youtube-video-only-plays-in-full-screen
res_type: kb
---


## Problem

YouTube video only plays full screen. You may hear audio when not in full screen mode. This happens only after showing the media player.

## Description

When the RadMediaPlayer control is rendered in a container that is not visible on the page (e.g., has display: none;), the &lt;iframe&gt; that holds the YouTube video cannot initialize its dimensions properly.

Thus, when you show the player and hit "play", you only hear the sound until you switch to full screen mode. This happens because the &lt;iframe&gt; has 0px width and height.

## Solution

To have the &lt;iframe&gt; have correct dimensions, you need to call a script when the media player is made visible that will do that.

The example below simply stretches the frame to the media player size. It uses a RadTabStrip and its events to show the media player.

````ASPX
<script>
    function OnClientTabSelected(sender, args) {
        var currPageView = args.get_tab().get_pageView();
        var dims = { width: "100%", height: "100%" };
        //set the iframe size to 100% when the media player is shown after it has been rendered hidden
        $telerik.$(currPageView.get_element()).find(".RadMediaPlayer iframe").css(dims);
    }
</script>
<telerik:RadTabStrip ID="RadTabStrip1" runat="server" RenderMode="Auto" SelectedIndex="0" MultiPageID="RadMultiPage1"
    OnClientTabSelected="OnClientTabSelected">
    <Tabs>
        <telerik:RadTab runat="server" Text="Home" Selected="true"></telerik:RadTab>
        <telerik:RadTab runat="server" Text="Meetings"></telerik:RadTab>
    </Tabs>
</telerik:RadTabStrip>
<telerik:RadMultiPage ID="RadMultiPage1" runat="server" SelectedIndex="0">
    <telerik:RadPageView ID="Home" runat="server">This is the home page tab</telerik:RadPageView>
    <telerik:RadPageView ID="Meetings" runat="server">
        <telerik:RadMediaPlayer ID="mpMeetingVideo" runat="server" Source="https://www.youtube.com/watch?v=qgayk8a2lXU"
            Title='Sample Title' AutoPlay="false" RenderMode="Lightweight" Height="316" Width="560">
        </telerik:RadMediaPlayer>
    </telerik:RadPageView>
</telerik:RadMultiPage>
````

 